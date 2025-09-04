import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    isConnected = true;
};

export default connectDB;