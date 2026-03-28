import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const QuoteSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    budget: String,
    timeline: String,
    service: String,
    projectDetails: String,
  },
  { timestamps: true }
);

const Quote =
  mongoose.models.Quote || mongoose.model("Quote", QuoteSchema);

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, budget, timeline, service, projectDetails } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await Quote.create({
      name,
      email,
      budget,
      timeline,
      service,
      projectDetails,
    });

    return NextResponse.json(
      { success: true, message: "Quote request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}