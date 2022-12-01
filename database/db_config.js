const MONGO_URI = process.env.MONGO_URI;

import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
