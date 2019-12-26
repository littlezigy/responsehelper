(function () {
'use strict';

	const express = require('express');
	const request = require("supertest");
	const bodyparser = require('body-parser');
	const responsehelper = require("../index.js");
	const app = express();
	app.use(bodyparser.text())
	app.use(bodyparser.json());
	app.use(responsehelper);

	app.post('/success', function(req, res) {
		console.log("req body", req.body); 
		return res.success(req.body);
	});

	describe("res.success", function() {
		test("res.success(Object)", async function() {
			let foo = await request(app).post("/success")
						.send({fee: "fee", fi: "fi!", foh: 'foh!', fum: 'I smell the blood of an Englishman!'});;
			expect(foo.body).toHaveProperty('success');
			expect(typeof foo.body.success).toEqual('string');
			expect(foo.body).toHaveProperty('data');
		});

		test('res.success(string)', async function() {
			let payload = 'sample string';
			let foo = await request(app)
					.post('/success').set('Content-type', 'text/plain')
					.send(payload);

			expect(foo.body).toHaveProperty('success', payload);
		});
	});
}());
