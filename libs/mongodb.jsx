import mongoose from "mongoose";

const connectMongoDb = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to the database")
    }catch(err){
        console.log("Error in Connecting db: ",err)
    }
    
}

export default connectMongoDb;