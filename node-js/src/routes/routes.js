const express = require('express')
const router = express.Router()

const { createStudent } = require('../controller/studentControl')
const { createCourse } = require('../controller/courseControl')

//router method
router.get('/',(req,res)=>{
    res.send("Router method !!")
})
//route for create
router.post('/student',createStudent) //POST method for Create
router.post('/course',createCourse)

module.exports=router;