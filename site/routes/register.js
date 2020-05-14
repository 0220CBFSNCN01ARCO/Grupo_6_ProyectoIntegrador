var express = require('express');
var router = express.Router();

/* ruta a login */
router.get('/', function(req, res) {
  res.render('register');
});

module.exports = router;