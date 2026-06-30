import { Link } from "react-router-dom";

type MovieCardProps={
   movie:{ 
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Genre?: string;
    Type:string;
   }
}
const MovieCard=({movie}:MovieCardProps)=>{
    return(
        <>
        <Link to={`/movie/${movie.imdbID}`}>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
            <img src={movie.Poster} alt={movie.Title}  className="w-full h-80 object-cover"/>
        <div className="p-4">
            <h2 className="text-large font-bold">{movie.Title}</h2>
            <p className="text-gray-600">{movie.Year}</p>
            <p className="text-gray-600">{movie.Genre ||"Not Available"}</p>
            <p className="text-gray-600">Type: {movie.Type}</p>
        </div>
        </div>
        </Link>
        </>
    )
}
export default MovieCard