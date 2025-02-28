import mongoose from 'mongoose'
import dotEnv from 'dotenv'
dotEnv.config()



export const connectDb = () =>{
    try{ 
        mongoose.connect(process.env.MONGO_URL)
        console.log('connected monogDb')
    }
    catch(err){
        console.log("did not connect to the mongoDb")
    }   
}

