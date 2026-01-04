import axios, { AxiosResponse } from "axios";
import { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/movie/11";
const myKey = import.meta.env.VITE_API_KEY;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<FetchMoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    }
  );

  return response.data.results;
};
