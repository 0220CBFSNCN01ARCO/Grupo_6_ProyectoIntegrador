var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');


/* ruta al home */

router.get('/' ,indexController.catalagoCompleto);

module.exports = router;