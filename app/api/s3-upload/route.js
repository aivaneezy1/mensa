import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import mime from "mime"; // Import mime package

const s3client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
  },
});

const uploadFileToS3 = async (file, filename) => {
  const fileBuffer = file;
  console.log(filename);

  // Determine the MIME type based on the file extension
  const contentType = mime.getType(filename) || "application/octet-stream";
  const path = `profile-upload/${filename}`;

  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: path,
    Body: fileBuffer,
    ContentType: contentType,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3client.send(command);

    // Construct the URL of the uploaded object
    const objectUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/${path}`;

    return objectUrl;
  } catch (error) {
    console.error("S3 upload error: ", error);
    throw new Error("S3 upload failed");
  }
};

export const POST = async (request) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);
    

    // returning the filename
    return NextResponse.json(
      { success: true, filename: fileName },
      { status: 200 }
    );
  } catch (err) {
    console.error("Upload handler error: ", err);
    return NextResponse.json(
      { error: "Error in uploading file" },
      { status: 400 }
    );
  }
};
