var express = require('express');
var router = express.Router();

/* ruta a carro de compras */
router.get('/', function(req, res) {
  res.render('productCart');
});

module.exports = router;