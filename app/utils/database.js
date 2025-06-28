import mongoose from "mongoose";

const connectDB = async() => {

    try {
        await mongoose.connect("mongodb+srv://itoshige44524721:wy2hGPJF3CA5rmRK@cluster0.bsfccpb.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connect to MongoDB")
    } catch {
        console.log("Succcess: Unconneted to MongoDB")
        throw new Error();
    }
}

export default connectDB