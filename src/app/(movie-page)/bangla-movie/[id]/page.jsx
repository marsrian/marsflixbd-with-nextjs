import { getSingleBanglaMovie } from '@/components/fetch/getBanglaMovies'
import Image from 'next/image';
import React from 'react'

const SingleBanglaMoviePage = async ({params}) => {
    const {banglaMovie} = await getSingleBanglaMovie(params);
    const {movieName, moviePoster, releaseDate, IMDB} = banglaMovie;
  return (
    <div className=''>
      <h1>Movie: {movieName}</h1>
      <Image src={moviePoster} width={400} height={500} alt={moviePoster} />
    </div>
  )
}

export default SingleBanglaMoviePage
