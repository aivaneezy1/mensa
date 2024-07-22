import { connectDB } from "@/app/utils/connectDb";
import CurriculumModel from "@/app/models/Post";
import { NextResponse } from "next/server";

// Getting the data by passing the id of the user that is currently logged.
export const GET = async (request, {params}) => {
  const id = params.id;

  try {
    await connectDB();
    const posts = await CurriculumModel.find({ "postOwner.userId":id });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error("Database connection error: ", err);
    return new NextResponse(
      "Error in connecting to the database " + err.message,
      { status: 500 }
    );
  }
};
