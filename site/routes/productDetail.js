var express = require('express');
var router = express.Router();

/* ruta a detalle del producto */
router.get('/', function(req, res) {
  res.render('productDetail');
});

module.exports = router;