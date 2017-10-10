const express    = require('express');
const session    = require('express-session');
const flash      = require('express-flash');
const bodyParser = require('body-parser');

const app = express();

// -------------------------------------------

// Put routers here

// -------------------------------------------

app.use(session({
  secret: 'mass-session',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// -------------------------------------------

// Put routing here

// -------------------------------------------

app.listen(process.env.PORT || '3000');
