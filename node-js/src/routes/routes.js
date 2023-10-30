const express = require('express')
const router = express.Router()

const { createStudent } = require('../controller/studentControl')

//router method
router.get('/',(req,res)=>{
    res.send("Router method !!")
})
//route for create
router.post('/student',createStudent) //POST method for Create

module.exports=router;