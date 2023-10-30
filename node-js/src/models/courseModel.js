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
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
}, {timestamps : true}
)

module.exports = mongoose.model('Course',courseSchema)