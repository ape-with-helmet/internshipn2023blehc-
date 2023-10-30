const courseModel = require('../models/courseModel');

const createCourse = async function(req,res){
    try{
        let course = req.body;
        let {name,code,duration,description}=course;
        if (!name || !code || !duration || !description){
            return res.send({message : "Please provide all information !"})
        }
        
        //unique validation
        let uniqueEmail = await courseModel.findOne({name})
        if (uniqueEmail) {
            return res.send({message : "name already exists!"})
        }
        let uniquePhone = await courseModel.findOne({code})
        if (uniquePhone) {
            return res.send({message : "code already exists!"})
        }
        let createStu = await courseModel.create(course)
        return res.send({message : createStu})
    }catch(err){
        console.log("server error",err);
    }
}

module.exports.createStudent = createCourse;