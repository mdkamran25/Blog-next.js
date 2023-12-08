import connectMongoDb from "../../../../libs/mongodb";
import Blog from "../../../../models/blog";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const { title, category, writerName, description, publisher, img } = await req.json();
  await connectMongoDb();
  await Blog.create({
    title,
    category,
    writerName,
    description,
    publisher,
    img,
  });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}
