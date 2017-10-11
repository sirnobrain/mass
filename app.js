const express    = require('express');
const session    = require('express-session');
const flash      = require('express-flash');
const bodyParser = require('body-parser');
const path 			 = require('path');

const app = express();

// routing
const index = require('./routes/index');
const table = require('./routes/table');
const kitchen = require('./routes/kitchen');
// const admin = require('./routes/admin');

// session
app.use(session({
  secret: 'mass-session',
  resave: false,
  saveUninitialized: true
}));

// session flash
app.use(flash());

// body parser
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());

// set view engine to ejs
app.set('view engine', 'ejs');

// set static files path
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.use('/', index);
app.use('/table', table);
app.use('/kitchen', kitchen);
// app.use('/admin', admin);

// listening on environment port or 3000
app.listen(process.env.PORT || '3000');