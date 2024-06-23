import dbConnect from "@/lib/dbConnect";
import BanglaMovie from "@/modals/banglaMovie";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { movieName, moviePoster, releaseDate, IMDB } = await req.json();
  await dbConnect();
  await BanglaMovie.create({
    movieName,
    moviePoster,
    releaseDate,
    IMDB,
  });
  return NextResponse.json(
    { message: "movie post create successfully" },
    { status: 201 }
  );
}

export async function GET(res) {
  await dbConnect();
  const banglaMovies = await BanglaMovie.find();
  return NextResponse.json({ banglaMovies });
}
