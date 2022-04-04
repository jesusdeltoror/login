var express = require('express');
var router = express.Router();
var {client, dbName} = require('../db/mongo');
var passport = require('passport');
const { ObjectId } = require('mongodb');

passport.deserializeUser(async function(id, done) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('usuarios');
   await collection.findOne({_id:ObjectId(id)}, function (err, user) {
    done(err, user);
  });
});

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index');
}); */
router.get('/',(req, res, next) => {
  if (req.isAuthenticated()) {
      return next();
  } else {
      res.redirect('/login')
  }
}, function(req, res, next) {
  res.render('index');
});

module.exports = router;
