/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { MoviesContext } from "../../Context/MoviesContext";
import StarIcon from "../../assets/icons/star-24px.svg";
import Loader from "../Loader/Loader";

const MovieCard = () => {
  const { movies, loading } = useContext(MoviesContext);
  return (
    <div className="container  mx-auto px-4 pt-16">
      <h2 className="text-3xl font-bold text-left sm:text-center sm:text-4xl mt-6">
        React Movie App List
      </h2>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div className="grid lg:grid-cols-4 gap-8">
          {movies?.results?.map((movie, index) => {
            return (
              <div
                key={index}
                className="mt-8 max-w-md	  rounded-2xl hover:bg-slate-800 pb-6 transition ease-in-out duration-150 bg-slate-900 p-2"
              >
                <a href="#">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="movie-poster"
                    className="hover:opacity-75 max-h-max max-w-full rounded-lg transition ease-in-out duration-150"
                  />
                </a>
                <div className="mt-2">
                  <div className="flex items-center mt-2">
                    <div className="bg-gray-300 flex items-center rounded-lg p-1 pr-2  text-sm font-semibold text-gray-700 mr-2">
                      <img
                        src={StarIcon}
                        alt="star-icon"
                        className="w-4 h-4 mr-1"
                      />
                      <span>{movie.vote_average}</span>
                    </div>
                    <span className="text-gray-200">{movie.release_date}</span>
                  </div>
                  <p className="text-lg flex mt-2 hover:text-gray-300 text-white ">
                    {movie.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
