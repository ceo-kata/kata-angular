let express = require('express');
let router = express.Router();

let userController = require('./api/userController');

router.get('/users', userController.findAll);
router.post('/users', userController.save);
router.get('/users/:userFirstName', userController.find);
router.delete('/users/:userFirstName', userController.delete);

module.exports = router;
