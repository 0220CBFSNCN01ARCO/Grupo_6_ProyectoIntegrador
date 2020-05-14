var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/productcart', function(req, res, next) {
  res.render('productCart', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/productAdd', function(req, res, next) {
  res.render('productAdd', { title: 'Express' });
});

router.get('/productDetail', function(req, res, next) {
  res.render('productDetail', { title: 'Express' });
});



module.exports = router;
