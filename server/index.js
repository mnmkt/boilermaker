const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('../db');
// configure and create our database store
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const dbStore = new SequelizeStore({ db: db });

app.use(volleyball);

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// // sync so that our session table gets created
// dbStore.sync();

//DO WE CREATE ENV VARS DURINNG DEPLOYMENT?...process.env.SESSION_SECRET = 'TEST'
//  store: dbStore,
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));


app.use('/api', require('../apiRoutes'))


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});


//Make sure this is at the very end of your server entry file!
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()  // sync our database
.then(function(){
  app.listen(port) // then start listening with our express server once we have synced
})

module.exports = app;
