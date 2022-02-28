const mongoose=require(`mongoose`)

const Employee=new mongoose.Schema({
    FirstName:String,
    LastName:{type:String,required:true},
    Email:String,
    Age:Number
},
{timestamps:true}
)

module.exports=mongoose.model(`Employee`,Employee)