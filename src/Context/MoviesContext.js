import React, { useState, createContext, useEffect } from "react";
import Pagination from "../components/Pagination/Pagination";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const API_KEY = "323ebf4bff382523eb2afe25405bd998";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const getMoviesBetween = async () => {
    const moviesResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=2019-01-01&primary_release_date.lte=2022-01-01`
    );
    const moviesJson = await moviesResponse.json();
    setMovies(moviesJson);
  };

  useEffect(() => {
    getMoviesBetween();
  }, [page]);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
      <Pagination currentPage={page} setPage={setPage} />
    </MoviesContext.Provider>
  );
};
