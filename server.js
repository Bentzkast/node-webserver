const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})

app.use((req,res,next)=>{
	var now = new Date().toString();
	console.log(`${now} : ${req.method} ${req.url}`);
	next();
});

// app.use((req,res,next)=>{
// 	res.render('maintenance.hbs',{
// 		pageTitle: 'Maintenance',
// 	})
// });

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		pageTitle: 'Home',
		welcomeTitle: 'Hello!'
	})
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle : 'About',
	})
});

app.get('/project',(req,res)=>{
	res.render('about.hbs',{
		pageTitle : 'Project',
	})
});

app.get('/bad',(req,res)=>{
	res.send({
		errorMessage: 'unable to fetch data'
	});
});



app.listen(port, () => {
	console.log(`server started at port ${port}`);
});