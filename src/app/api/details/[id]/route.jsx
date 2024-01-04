import connectMongoDb from "../../../../../libs/mongodb";
import { NextResponse } from "next/server";
import Blog from "../../../../../models/blog";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const data = await Blog.findById(id);  // Use findById instead of find
    console.log("data: ", data);

    if (data) {
      return NextResponse.json({ result: data, status: true, message: "Data Found" });
    } else {
      return NextResponse.json({ result: [], status: false, message: "Data not found" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ result: [], status: false, message: err.message });
  }
}
