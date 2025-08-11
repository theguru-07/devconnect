import { connectToDB } from "@/lib/mongodb";
import mongoose from "mongoose";



export async function GET() {
  try {
    await connectToDB();
    const users = await User.find();
    return Response.json(users);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectToDB();
    const { name, email, bio, avatar } = await req.json();

    const newUser = new User({ name, email, bio, avatar });
    await newUser.save();

    return Response.json(newUser);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
