import mongoose, { Schema } from "mongoose";

const banglaMovieSchema = new Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    moviePoster: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    IMDB: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const BanglaMovie =
  mongoose.models.BanglaMovie ||
  mongoose.model("BanglaMovie", banglaMovieSchema);

export default BanglaMovie;
