const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const path=require('path')
const mongoose=require('mongoose')
const db="mongodb://localhost:27017/golidfishdb"

mongoose.connect(db,(err)=>{
     if(err) throw err
     else
      console.log("connected to mongodb")
})

const api=require('./routes/api')
const app=express()
app.use(cors())
app.use(bodyParser.json())
const port=5000
app.use('/api',api)
app.listen(port,()=>{
    console.log("server running on localhost:"+ port)
})