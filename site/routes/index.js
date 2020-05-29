var express = require('express');
var router = express.Router();
const indexControlller = require('../controllers/indexController');

/* ruta al home */
router.get('/', indexControlller.home);

module.exports = router;