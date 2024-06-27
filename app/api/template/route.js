
import { NextResponse } from "next/server";
import { convertDocxToHtml } from "@/app/utils/converHTML";
export const GET = async (req, res) =>{
  const filePath = "c:\\Users\\Golden\\Desktop\\vscode\\App6(Nextjs)\\mensa\\public\\A.docx";

  try {
    const html = await convertDocxToHtml(filePath);
    console.timeEnd('convertDocxToHtml'); // End timing and log
    return NextResponse.json({ html }, { status: 200 });
  } catch (error) {
    console.timeEnd('convertDocxToHtml'); // Ensure timing ends even on error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

 console.log(__dirname)