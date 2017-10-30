// // The following is in the `start.js` file

// // say our sequelize instance is create in 'db.js'
// const db = require('../db');
// // and our server that we already created and used as the previous entry point is 'server.js'
// const app = require('./index.js');
// const port = process.env.PORT || 3000;

// //Remember that if you pass the force: true option to sync, that will drop all of your tables before re-creating them. Be sure to never do this in production!
// db.sync()  // sync our database
//   .then(function(){
//     app.listen(port) // then start listening with our express server once we have synced
//   })
