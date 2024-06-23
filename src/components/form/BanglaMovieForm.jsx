"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

const BanglaMovieForm = () => {
  const [movieName, setMovieName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [IMDB, setIMDB] = useState("");
  const [moviePoster, setMoviePoster] = useState(null);
  const [loading, setLoading] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!movieName || !moviePoster || !releaseDate || !IMDB) {
      alert("all input field are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", moviePoster);

      // Upload the image to ImgBB
      const resImg = await fetch(
        `https://api.imgbb.com/1/upload?key=8c7e6715d65ea121c19223b0819e1826`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await resImg.json();
      if (!imgData.success) {
        throw new Error("Failed to upload image");
      }
      const imgUrl = imgData.data.url;

      const res = await fetch(`http://localhost:3000/api/bangla-movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            movieName,
            moviePoster: imgUrl,
            releaseDate,
            IMDB,
        }),
      });
      if (res.ok) {
        alert("successfully submitted");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="banglaMovie">Bangla Movie Name</label>
        <input
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
          type="text"
          name="banglaMovie"
          id="banglaMovie"
          placeholder="Bangla Movie Name"
          className="border p-2 rounded-md border-gray-600"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="banglaPoster">Bangla Movie Poster</label>
        <input
          onChange={(e) => setMoviePoster(e.target.files[0])}
          type="file"
          name="banglaPoster"
          id="banglaPoster"
          className="border p-2 rounded-md border-gray-600"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="releaseDate">Release Date</label>
        <input
          onChange={(e) => setReleaseDate(e.target.value)}
          value={releaseDate}
          type="text"
          name="releaseDate"
          id="releaseDate"
          placeholder="Release Date"
          className="border p-2 rounded-md border-gray-600"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="IMDB">IMDB Rating</label>
        <input
          onChange={(e) => setIMDB(e.target.value)}
          value={IMDB}
          type="text"
          name="IMDB"
          id="IMDB"
          placeholder="IMDB Rating"
          className="border p-2 rounded-md border-gray-600"
        />
      </div>
      <Button type="submit" className="mt-3">
        Add Bangla Movie
      </Button>
    </form>
  );
};

export default BanglaMovieForm;
