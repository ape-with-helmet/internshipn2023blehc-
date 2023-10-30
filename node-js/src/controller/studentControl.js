const studentModel = require('../models/studentModel');
const { validEmail, validPassword, validMobile } = require('../validations/valid');

const createStudent = async function(req,res){
    try{
        let student = req.body;
        let {fname,lname,email,password,mobile,address}=student;
        if (!fname || !lname || !email || !password || !address || !mobile || !address){
            return res.send({message : "Please provide all information !"})
        }
        if (!validEmail) {
            return res.send({message : "please enter valid email: "})
        }
        if (!validPassword) {
            return res.send({message : "please enter valid password: "})
        }
        if (!validMobile) {
            return res.send({message : "please enter valid mobile number: "})
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

module.exports.createStudent = createStudent;