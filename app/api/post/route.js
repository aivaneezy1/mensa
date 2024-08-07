import { connectDB } from "@/app/utils/connectDb";
import CurriculumModel from "@/app/models/Post";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  if (request.method === "POST") {
    const { postOwner,cardModel, datiPersonali, compAndLang, profile, bgProfessional } =
      await request.json();


    try {
      await connectDB();
       const newCurriculum = await CurriculumModel.create({
        postOwner,
        cardModel,
        datiPersonali,
        compAndLang,
        profile,
        bgProfessional,
      });

      return new NextResponse(`Curriculum with ID ${newCurriculum._id} is created successfully`);
    } catch (err) {
      return new NextResponse(err.message, { status: 500 });
    }
  } else {
    return new NextResponse("Method is not allowed", { status: 405 });
  }
};


