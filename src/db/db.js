import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB is Connected !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("are tera connection nhi huaa", error);
        process.exit(1);
    }
}

export default connectDB;
