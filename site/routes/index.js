var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/productAdd', function(req, res, next) {
  res.render('productAdd', { title: 'Express' });
});

router.get('/productDetail', function(req, res, next) {
  res.render('productDetail', { title: 'Express' });
});



module.exports = router;
