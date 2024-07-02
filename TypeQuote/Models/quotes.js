import mongoose from "mongoose";
const quoteSchema= new mongoose.Schema({


quote:{
    type:String,
    required:true
},

writtenBy:{
type:mongoose.Types.ObjectId,
ref:"user"
},

date:{
    type:Date,
    default:Date.now
}

})
mongoose.models={}
const quoteModel= mongoose.model('quote',quoteSchema)
export default quoteModel