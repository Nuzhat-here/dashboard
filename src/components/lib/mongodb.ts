import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables.");
}

const client = new MongoClient(process.env.MONGODB_URI);
let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection.");
    return { client, db: client.db("YY_Ventures") };
  }

  try {
    await client.connect();
    isConnected = true;
    console.log("Connected to MongoDB.");
    return { client, db: client.db("YY_Ventures") };
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw new Error("Failed to connect to MongoDB");
  }
};
