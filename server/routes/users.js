var express = require('express');
const app = require('../app.js');
var router = express.Router();
var userController = require('../controllers/user.js');
var userMiddle = require('../middleware/middle.js');




/* GET users listing. */
// router.get('/',userMiddle.middle, userController.User);
router.get('/', userController.getUsers);
router.post('/', userController.userCreate);
router.get('/user/:id', userController.getUser);
router.put('/user/:id', userController.updateUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
