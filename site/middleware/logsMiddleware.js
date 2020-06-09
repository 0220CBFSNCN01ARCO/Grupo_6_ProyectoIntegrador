//middleware a nivel de aplicacion

const fs = require('fs');

function logsMiddleware (req,res,next) {
    fs.appendFileSync('logs.txt', 'Se accedió a la pagina ' + req.url + '\n');

    next();
}
module.exports = logsMiddleware;