import axios from "axios";

const API_KEY="16f1f809"
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies=async (movie:string)=>{
    const response=await axios.get(BASE_URL,{
             params: {
              apikey: API_KEY,
               s: movie,
   },
   })
    return response.data;
}
export const getMovieDetails=async (imdbID:string)=>{
    const response=await axios.get(BASE_URL,{
             params: {
             apikey: API_KEY,
                i: imdbID,
    },
    })
    return response.data;
}