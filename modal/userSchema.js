const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    mailId:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
})

const users=mongoose.model('users',userSchema)
module.exports=users