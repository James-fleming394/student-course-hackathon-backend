const { Student, Grade, Course } = require('../models')


//Students

const getStudent = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.send(students)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const getOneStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.student_id)
        res.send(student)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const createStudent = async (req, res) => {
    try {
        const student = await Student.create({ ...req.body })
        res.send(student)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

//Grades

const getGrade = async (req, res) => {
    try {
        const grades = await Grade.findAll()
        res.send(grades)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const getStudentGrade = async (req, res) => {
    try {
        const grade = await Grade.findByPk(req.params.student_id)
        res.send(grade)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const createGrade = async (req, res) => {
    try {
        const grade = await Grade.create({ ...req.body })
        res.send(grade)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

//Courses

const getCourse = async (req, res) => {
    try {
        const courses = await Course.findAll()
        res.send(courses)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const getOneCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.course_id)
        res.send(course)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

const createCourse = async (req, res) => {
    try {
        const course = await Course.create({ ...req.body })
        res.send(course)
    } catch (error) {
        res.status(500).send({ status: 'Error', msg: error.message })
    }
}

module.exports = {
    getStudent,
    getOneStudent, 
    createStudent,
    getGrade,
    getStudentGrade,
    createGrade,
    getCourse,
    getOneCourse,
    createCourse
}