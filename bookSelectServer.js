/* Group 31
 * 03/06/2018
 * 
 */

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 4037);

app.use(express.static('public'));

app.get('/bookSelect', function(req, res){
	context = {};
	fillBooks(context);
	res.render('bookSelect', context); 
});

app.post('/bookSelect', function(req, res){
	var context = {};

	res.render('getOrPost', context);
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

function fillBooks(context){
	context.avaliableBooks = [];
}