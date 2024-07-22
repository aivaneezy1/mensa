import { connectDB } from "@/app/utils/connectDb";
import CurriculumModel from "@/app/models/Post";
import { NextResponse } from "next/server";

// Getting the data by passing the id of the user that is currently logged.
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();
    const posts = await CurriculumModel.findOne({ _id: id });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error("Database connection error: ", err);
    return new NextResponse(
      "Error in connecting to the database " + err.message,
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  const { id } = params;

  const {
    postOwner,
    cardModel,
    datiPersonali,
    compAndLang,
    profile,
    bgProfessional,
  } = await request.json();

  try{
    await connectDB();
    const updatedPost = await CurriculumModel.findOneAndUpdate({_id: id}, {postOwner, cardModel,datiPersonali, compAndLang, profile, bgProfessional}, {new:true})
    return new NextResponse(JSON.stringify(updatedPost), {status:200});
  }catch(err){
    return new NextResponse(err.message, {status:500});
  }
};

