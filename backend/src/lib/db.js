import mongoose from "mongoose"
import { ENV } from "./env.js"

export const connectDB = async () => {
    try {
        
        if(!ENV.DB_URL) throw new Error("no db url in env");
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("DB connected successfully",conn.connection.host);
        
    } catch (error) {
        console.log("Error connecting db");
        process.exit(1);
    }
}

