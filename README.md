# Response Helper by littlezigy

A simple wrapper for express' response object.

## Getting Started
npm i @littlezigy/responsehelper
app.use('responsehelper');

## Here's how it works

### Sending a string
res.success('It worked!');

```
{
	success: "It worked!"
}
```

res.gerror("Sorry. Try again");
```
{
    error: "Sorry. Try again"
}
```
### Sending an object
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
res.gerror(data);
```
{
    error: "Error",
    data: {
        "bleep": "bloop",
        "bop": "hop"
    }
}
```
Have fun!
