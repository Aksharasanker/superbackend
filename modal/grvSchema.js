const mongoose=require('mongoose')
const grvSchema=new mongoose.Schema({
    type:{
        required:true,
        type:String
    },
   phone:{
        required:true,
        type:String
    },
    greviance:{
        required:true,
        type:String
    },
    userId:{
        required:true,
        type:String
    }
 
    
})

const complaints=mongoose.model('complaints',grvSchema)
module.exports=complaints