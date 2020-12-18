const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        validate(value){
            if(value<10){
                throw new Error("Phone number must have ateast 10 number.")
            }
        }
    },
    msg:{
        type:String,
        required:true,
    }
})

const Form = new mongoose.model("Form",formSchema)

module.exports = Form