import { connectDB } from "@/app/utils/connectDb";
import CurriculumModel from "@/app/models/Post";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const { postId } = params;

  try {
    connectDB();
    const post = await CurriculumModel.findByIdAndDelete({ _id: postId });
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }
    return new NextResponse("Post deleted successfully", { status: 200 });
  } catch (err) {
    console.error("Database connection error: ", err);
    return new NextResponse(
      "Error connecting to the database: " + err.message,
      { status: 500 }
    );
  }
};
