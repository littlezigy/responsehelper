# Response Helper by littlezigy

A simple wrapper for express' response object.

## Getting Started
app.use('responsehelper');

## Here's how it works

res.success('It worked!');

```
{
	success: "It worked!"
}
```

const data = {bleep: 'bloop', bop, 'hop'};

res.success(data);
```
{
	success: "Operation Successful",
	data: {
			"bleep": "bloop",
			"bop": "hop"
		  }
}
```

Have fun!
