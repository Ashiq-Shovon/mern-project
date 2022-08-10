var con = require('../controllers/user.js');
exports.middle = function(req, res, next){
    console.log("from middle wire");
    next();
}