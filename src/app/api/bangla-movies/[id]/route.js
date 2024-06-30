import dbConnect from "@/lib/dbConnect";
import BanglaMovie from "@/modals/banglaMovie";
import { NextResponse } from "next/server";

export async function GET(res, { params }) {
  const { id } = params;
  await dbConnect();
  const banglaMovie = await BanglaMovie.findOne({ _id: id });
  return NextResponse.json({ banglaMovie }, { status: 200 });
}
