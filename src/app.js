const express = require('express')
require('./db/conn')
const Form = require('./models/form')
const path = require('path')
const app = express()
const port = 8000 || process.env.PORT;
const hbs =  require('hbs')

const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine',"hbs")

app.get("/",(req,res)=>{
    res.render('index')
})

app.post("/",async(req,res)=>{
    try{
        const newForm = new Form({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            msg:req.body.msg
        })
        console.log(newForm)
        const result = await newForm.save()
        res.render('index')

    }
    catch(e){
        console.log(e)
        res.send(e)
    }
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}...`)
})