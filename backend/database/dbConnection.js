import mongoose  from "mongoose";
import config from "../config";
export const dbConnection =()=>{
    mongoose.connect(config.MONGO_URL,{
        dbName:"HOSPITAL_MANAGEMENT",
    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{
        console.log(`some error occure ${err}`);
    })
    
}





