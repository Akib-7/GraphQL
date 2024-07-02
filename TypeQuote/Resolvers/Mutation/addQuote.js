import quoteModel from "../../Models/quotes.js"

 //ADD a quote
    //SYNTAX addQuote:async(parent,variable,context)
    // destructuring payload:{user:userData} in the context parameter
const addQuote =async(parent,{quote},{user})=>{
    var userID=user._id
    //console.log("user ID" +userID)
    if(!userID){
        console.log("User not Logged in")
    }

 var newQuote=await quoteModel.create({writtenBy:userID,quote})
 console.log(newQuote)
return "Quote Saved "
}

export default addQuote