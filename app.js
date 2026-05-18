const express = require('express');
const { title } = require('node:process');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');


const app = express();

const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.sg5xgym.mongodb.net/node-tuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//view engine

app.set('view engine', 'ejs');


// middelware
app.use(morgan('dev'));

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( { extended: true } ));

// mongoose and mongo sandbox routes


app.get('/', (req, res)=> {
    res.redirect('/blogs');
});

app.get('/about', (req, res)=> {
    res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs', blogRoutes);

//  404 page must be last
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});