require('dotenv').config()//environment variable will be added to process.env file
const express=require('express')//import
const cors=require('cors')//import
const router=require('./router')//import
require('./db/connection')
const superServer=express()//create server
superServer.use(cors())//use cors to connect with frontend
superServer.use(express.json())//middleware to convert to json format
superServer.use(router)
const PORT=4000 ||process.env.PORT//port

superServer.listen(PORT,()=>{
    console.log(`Project running at port number:${PORT}`)
})

superServer.get('/',(req,res)=>{
    res.send('get request received')
})
