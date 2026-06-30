import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../api";
import StarRating from "../components/StarRating";
type Movie = {
  Title: string;
  Poster: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
};
const MovieDetails=()=>{
     const {imdbID}=useParams()
    const [movie, setMovie] = useState<Movie | null>(null);
   
    console.log(imdbID);

    useEffect(()=>{
        const loadMovie=async ()=>{
            if(!imdbID) return;
            const data=await getMovieDetails(imdbID);
            console.log(data);
            setMovie(data);
        };
        loadMovie();
    },[imdbID])
     if (!movie) {
    return (
      <h1 className="text-center mt-10 text-2xl">
        Loading...
      </h1>
    );
  }
    return(
    <div className="max-w-5xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-8">
         <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-lg shadow-lg"/>
          <div>
            <h1 className="text-4xl font-bold mb-4">{movie.Title}</h1>
            <p><strong>Year:</strong>{movie.Year}</p>
             <p><strong>Released:</strong> {movie.Released}</p>
             <p><strong>Genre:</strong> {movie.Genre}</p>
             <p><strong>Director:</strong> {movie.Director}</p>
             <p><strong>Actors:</strong> {movie.Actors}</p>          
             <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>IMDb Rating:</strong> ⭐ {movie.imdbRating}</p>
            <div className="mt-6">

            <h2 className="text-xl font-semibold">
              Plot
            </h2>

            <p>{movie.Plot}</p>
            <StarRating imdbID={imdbID!}/>

          </div>

          </div>

        </div>
    </div>
    )
}
export default MovieDetails