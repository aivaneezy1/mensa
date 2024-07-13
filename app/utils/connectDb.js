import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
// Connect to DB
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected successfully");
  } catch (err) {
    console.error("Database connection error", err);
    throw err;
  }
};

export { connectDB };
