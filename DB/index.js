const mongoose=require(`mongoose`)
const StringConnection=process.env.ConnectionString

mongoose.connect(StringConnection,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true 
    })
    .then(()=>console.log(`MongoDb is connected`))
    .catch(err=>console.log(err))

module.exports=mongoose.connection