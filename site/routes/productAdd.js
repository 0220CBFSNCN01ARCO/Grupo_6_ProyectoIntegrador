var express = require('express');
var router = express.Router();

/* ruta a agregar producto*/
router.get('/', function(req, res) {
  res.render('productAdd');
});

module.exports = router;