// pages/api/blog/category.js
import connectMongoDb from "./../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";
import { NextResponse } from "next/server";

export async function GET(req,{params}) {
  try{
      const {category} = params;
      await connectMongoDb();
      const data = await Blog.find({category});
      if(data){
        return NextResponse.json([{ result: data, status: true, message: "Data Found" }]);
      }
  }catch(err){
      console.log(err.message)
      return NextResponse.json({ result: [], status: false, message: err.message });
  }
}
