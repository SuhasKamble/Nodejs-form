const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/nodejs-form",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then(()=>{
    console.log("Database is connected..")
})
.catch((e)=>{
    console.log("Datbase is not connected")
})