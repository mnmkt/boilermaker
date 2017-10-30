const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');
const bodyParser = require('body-parser');

app.use(volleyball);

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes'))


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './path/to/index.html');
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
