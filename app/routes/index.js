const
    usersRoutes = require('./users'),
    coursesRoutes = require('./courses'),
    path = require('path');

function init(app) {

    app.use('/api', usersRoutes);
    app.use('/api', coursesRoutes);

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendFile(path.resolve('public/views/index.html'));
    });
}

module.exports = {
    init: init
};