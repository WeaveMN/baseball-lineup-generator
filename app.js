var express = require('express');
var app = express();
  //var Highlight = require('react-highlight');
app.use('/', express.static('app'));
//app.use('/highlight', express.static('node_modules/highlight.js'));

app.get('/home', function(req,res) {
	res.redirect('/');
});


app.listen(3000, function () {
  console.log('baseball lineup app listening on port 3000!');
});