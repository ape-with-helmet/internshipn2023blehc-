const express = require('express')
const app = express()
const mongoose = require('mongoose');
const route = require('./src/routes/routes')
app.use(express.json());
const PORT = 8080
mongoose.connect('mongodb+srv://ganeshshatrugna:ape1234@cluster0.wzhwa9v.mongodb.net/mydata')
.then(()=>{console.log("Database connected")})
.catch((error)=>{console.log(error)})
app.use('/',route);
app.listen(PORT,()=>{console.log('Server is running ${PORT}');
})