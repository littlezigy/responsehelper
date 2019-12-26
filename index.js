module.exports = (req, res, next) => {

    /**
     * @params {string} gerror - Error message.
     */
    res.gerror = function() {
        let message = (arguments[0]!== null && typeof arguments[0] === 'string') ? arguments[0] : "Error";
        let data = (typeof arguments[0] === 'object' || typeof arguments[0] === 'array') ? arguments[0] : null;
        let statusCode = arguments[1] || 400;

        res.status(statusCode).send({error: message, ...data && {data}});
    }

    /**
     * @params {message} - Error message
     */
    res.success = function() {
        let message = (arguments[0]!== null && typeof arguments[0] === 'string') ? arguments[0] : "Operation Successful";
        
        let data = (typeof arguments[0] === 'object' || typeof arguments[0] === 'array') ? arguments[0] : null;
        
		res.send({success: message, ...data && {data}});
    }

    res.failure = () => {
        let message = arguments[0] || "Operation Successful";
        let statusCode = arguments[1] || 400;
        let data = arguments[1] || null;

        res.status(statusCode).send({fail: message, ...data && {data}});
    }
    next();
}
