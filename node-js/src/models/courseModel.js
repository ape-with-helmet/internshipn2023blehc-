const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true,
    },
    code : {
        type : String,
        required : true,
        unique : true,
    },
    duration : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    student : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Student",
        }
    ]
}, {timestamps : true}
)

module.exports = mongoose.model("Course",courseSchema)