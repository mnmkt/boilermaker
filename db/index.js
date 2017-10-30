const Sequelize = require('sequelize');
//REQUIRE ./MODELS (INDEX.JS)

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilerDB', {
  logging: false
});

module.exports = db;

