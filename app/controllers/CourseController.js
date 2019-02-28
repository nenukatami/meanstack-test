var Course = require('../models/courses');
var User = require('../models/users');

const getCoursesByUser = function(req, res){
    let pass = req.body.password;
    let login = req.body.login;

    User.find({login: login, password: pass }, function (err, data) {

        if (err) {
            res.send(err);
        }

        if (data.length !== 0) {
            Course.find({users: login }, function (err, data) {

                if (err) {
                    res.send(err);
                }

                res.json(data);
            });
        } 
        else {
            res.json([]);
        }
    });

};
module.exports.getCoursesByUser = getCoursesByUser;