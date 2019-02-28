const
    express = require('express'),
    UserController = require('./../../controllers/UserController');

let router = express.Router();

router
    .post('/login',
        UserController.login);

module.exports = router;