var User = require('../models/users');

const login = function(req, res){
    let pass = req.body.password;
    let login = req.body.login;

    User.find({login: login, password: pass }, function (err, data) {

        if (err) {
            res.send(err);
        }

        res.json(data);
    });
};
module.exports.login = login;