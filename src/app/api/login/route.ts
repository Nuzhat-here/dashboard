import { NextResponse } from "next/server";
import { connectToDatabase } from "@/components/lib/mongodb"; // Check the path!
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    console.log("📩 Received login request for:", email);

    // ✅ Connect to the database
    const connection = await connectToDatabase();
    if (!connection || !connection.db) {
      console.error("❌ Database connection failed.");
      return NextResponse.json({ error: "Database connection error" }, { status: 500 });
    }

    const { db } = connection;
    const usersCollection = db.collection("users");

    // ✅ Check if user exists
    const user = await usersCollection.findOne({ email });
    if (!user) {
      console.error("❌ User not found:", email);
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    console.log("🔍 Found user:", user);

    // ✅ Ensure password is hashed before comparing
    if (!user.password) {
      console.error("❌ Password is missing in database for:", email);
      return NextResponse.json({ error: "User data error" }, { status: 500 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.error("❌ Invalid password for:", email);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    console.log("✅ Login successful for:", email);
    return NextResponse.json({ message: "Login successful" });
  } catch (error) {
    console.error("🔥 Error during login:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
