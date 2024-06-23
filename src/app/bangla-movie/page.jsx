import { getBanglaMovies } from "@/components/fetch/getBanglaMovies";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

const BanglaMoviePage = async () => {
  const { banglaMovies } = await getBanglaMovies();

  return (
    <div className="px-2 md:px-6 mt-4 md:mt-8">
      <h1 className="border-l-4 border-l-red-600 pl-2 text-xl md:text-3xl font-semibold text-blue-gray-800 dark:text-white">
        Bangla Movie: {banglaMovies?.length}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4">
        {banglaMovies?.map((banglaMovie) => (
          <Link
            href={`bangla-movie/${banglaMovie._id}`}
            className="group block border-1 shadow-xl shadow-slate-600 hover:opacity-90 overflow-x-hidden mt-2"
            key={banglaMovie._id}
          >
            <div className="relative">
              <Image
                src={banglaMovie.moviePoster}
                width={250}
                height={300}
                alt={banglaMovie.moviePoster}
                className="h-80 transition-transform hover:opacity-50 w-full"
              />
              <h3 className="absolute opacity-0 group-hover:opacity-100 top-2/4 right-1/2 text-3xl font-bold">
                <FaPlay />
              </h3>
            </div>
            <h3
              title={banglaMovie.movieName}
              className="hover:text-blue-600 pl-1 md:pl-2 text-base md:font-bold mb-2 mt-1 h-5"
            >
              {banglaMovie.movieName}
            </h3>
            <div className="px-1 md:px-2 md:pb-2 flex justify-between">
              <p>{banglaMovie.releaseDate}</p>
              <p>{banglaMovie.IMDB}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BanglaMoviePage;
