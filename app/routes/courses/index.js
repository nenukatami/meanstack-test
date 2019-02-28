const
    express = require('express'),
    CoursesController = require('./../../controllers/CourseController');

let router = express.Router();

router
    .post('/courses',
        CoursesController.getCoursesByUser);

module.exports = router;