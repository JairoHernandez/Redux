var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		// console.log('test1');
		res.redirect('http://' + req.hostname + req.url);
	} else {
		// console.log('test2');
		next();
	}
});

// console.log('test 3');
app.use(express.static('public'));

// port 3000
app.listen(PORT, function() {
	console.log('Express server up on port ' + PORT);
});