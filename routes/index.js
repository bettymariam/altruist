const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Welcome'});
});

router.get('/register', function(req, res, next) {
  res.render('login', {title : 'Welcome', {register}});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title : 'Welcome', {login}});
});
module.exports = router;
