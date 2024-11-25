import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL = process.env.MONGODB_URL;

  if (!connectionURL) {
    console.error("Error: MONGODB_URL is not defined in environment variables.");
    process.exit(1); // Exit the process with a failure code
  }

  try {
    await mongoose.connect(connectionURL, {
     
      serverSelectionTimeoutMS: 5000, // Optional: Adjust connection timeout
    });
    console.log("Jon board database connection is successful");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectToDB;
