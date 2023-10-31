const studentModel = require('../models/studentModel');
const { validEmail, validPassword, validMobile } = require('../validations/valid');

const createStudent = async function(req,res){
    try{
        let student = req.body;
        let {fname,lname,email,password,mobile,address}=student;
        if (!fname || !lname || !email || !password || !address || !mobile){
            return res.send({message : "Please provide all information !"})
        }
        let valEmail = validEmail(email);
        if (!valEmail) {
            return res.status(500).send({message : "please enter valid email: "})
        }
        let valPass = validPassword(password);
        if (!valPass) {
            return res.status(500).send({message : "please enter valid password: "})
        }
        let valMob = validMobile(mobile);
        if (!valMob) {
            return res.status(500).send({message : "please enter valid mobile number: "})
        }
        
        //unique validation
        let uniqueEmail = await studentModel.findOne({email})
        if (uniqueEmail) {
            return res.send({message : "Email already exists!"})
        }
        let uniquePhone = await studentModel.findOne({mobile})
        if (uniquePhone) {
            return res.send({message : "Phone already exists!"})
        }
        let createStu = await studentModel.create(student)
        return res.send({message : createStu})
    }catch(err){
        console.log(err);
    }
}

//delete API
const deleteStudent = async function(req,res){
    try{
        let student = req.body;
        let {email,password}=student;
        if (!email || !password){
            return res.send({message : "Please provide all information !"})
        }
        //unique validation
        let uniqueEmail = await studentModel.findOne({email})
        if (!uniqueEmail) {
            return res.send({message : "Email does not exist!"})
        }
        let deleteStu = await studentModel.deleteOne(student)
        return res.send({message : deleteStu})
    }catch(err){
        console.log(err);
    }
}

//login api
let loginStudent = async (req,res)=>{
    try {
        let data = req.body;
        let {email,password}=data;
        if (!email || !password){
            return res.status(400).send({message : "Please provide all information !"})
        }
        let matchStudent = await studentModel.findOne({email,password})
        if (!matchStudent) {
            return res.status(200).send({message:"Student not Registered"})//200 is the error code for "Working".
        }
        const token = jwt.sign({
            studentId:matchStudent._id.toString(),
        },"mernStack",
        {
            expiresIn:"12000sec"
        })
        return res.status(200).send({status: true, message: "Student Logged in Successfully",data:token})

    } catch (error) {
        return res.status(500).send({status:false, message:"Internal Server error!"})
    }
}
module.exports = { loginStudent,createStudent,deleteStudent }