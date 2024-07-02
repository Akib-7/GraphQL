import mongoose from "mongoose";

const connectToMongo=()=>{
mongoose.connect("mongodb://127.0.0.1:27017/graphQL")

mongoose.connection.on("connected",()=>{
    console.log("Connected to Mongo Succesfully")
})
mongoose.connection.on("error",(error)=>{
console.log("error Connecting to DB",error)
})
}


export default connectToMongo;