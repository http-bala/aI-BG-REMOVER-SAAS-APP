import mongoose from "mongoose";

const connectdb = async ()=> {

    mongoose.connection.on('connected',()=>{
        console.log('database is connected');
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/bgremover`)

}

export default connectdb;