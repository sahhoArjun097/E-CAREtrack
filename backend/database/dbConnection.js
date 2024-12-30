import mongoose  from "mongoose";
export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"HOSPITAL_MANAGEMENT",
    }).then(()=>{
        console.log("connected to database")
    }).catch(err=>{
        console.log(`some error occure ${err}`);
    })
    
}





