const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.use(express.static('public'))

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/',  (req, res) => {
    res.render('index', { layout: false });
});

app.get('/water',  (req, res) => {
    res.render('water', { layout: false });
});

app.get('/grass',  (req, res) => {
    res.render('grass', { layout: false });
});

app.get('/dark',  (req, res) => {
    res.render('dark', { layout: false });
});

app.get('/fire',  (req, res) => {
    res.render('fire', { layout: false });
});

app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});