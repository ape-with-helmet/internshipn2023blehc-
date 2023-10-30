const studentModel = require('../models/studentModel');

const createStudent = async function(req,res){
    try{
        let student = req.body;
        let {fname,lname,email,password,mobile,address}=student;
        if (!fname || !lname || !email || !password || !address || !mobile || !address){
            return res.send({message : "Please provide all information !"})
        }
        let createStu = await studentModel.create(student)
        return res.send({message : createStu})
    }catch(err){
        console.log(err);
    }
}

module.exports.createStudent = createStudent;