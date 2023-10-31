const express = require('express')
const router = express.Router()

const { createStudent, deleteStudent, loginStudent } = require('../controller/studentControl')
const { createCourse } = require('../controller/courseControl')

//router method
router.get('/',(req,res)=>{
    res.send("Router method !!")
})
//route for create
router.post('/student',createStudent) //POST method for Create
router.post('/course',createCourse)
router.post('/delete',deleteStudent)
router.post('/login',loginStudent)

module.exports = router;