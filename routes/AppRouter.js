const router = require('express').Router()
const controller = require('../controllers/Controller')

//Routes Here

//Students

router.get('/students', controller.getStudent)

router.get('/students/:student_id', controller.getOneStudent)

router.post('/student/new', controller.createStudent)


//Courses

router.get('/courses', controller.getCourse)

router.get('/courses/:course_id', controller.getOneCourse)

router.post('/courses/new', controller.createCourse)


//Grades

router.get('/grades/students', controller.getGrade)

router.get('/grades/:student_id', controller.getStudentGrade)

router.post('/grades/:student_id/new', controller.createGrade)

module.exports = router;

