var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/carrito', function(req, res, next) {
  res.render('carrito', { title: 'Express' });
});
module.exports = router;
