var express = require('express');
const app = require('../app.js');
var router = express.Router();
var userController = require('../controllers/user.js');
var userMiddle = require('../middleware/middle.js');




/* GET users listing. */
router.get('/',userMiddle.middle, userController.User);
router.post('/', userController.userCreate);
module.exports = router;
