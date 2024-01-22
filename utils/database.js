import mongoose from "mongoose";
let isConnected=false;//track connection status

export const connectToDb=async()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("connected already to db");
        return
    }

    try{
         await mongoose.connect(process.env.MONGODB_URI,{
              dbName:"share_prompt",
              useNewUrlParser: true,  
              useUnifiedTopology : true,
         })
         isConnected=true;
    }catch(error){
        console.log(error);
    }

}