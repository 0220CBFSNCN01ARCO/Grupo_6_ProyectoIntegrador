var express = require('express');
var router = express.Router();

/* ruta al home */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
