import { useEffect, useState } from "react"
import { getMovieDetails, searchMovies } from "../api"
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar"

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbRating?: string;
};

const Home=()=>{
    const [movies,setMovies]=useState<Movie[]>([])
    const years = [...new Set(movies.map((movie) => movie.Year))];
    const [search,setSearch]=useState("batman")
    const [selectedYear, setSelectedYear] = useState("");
   
    const filteredMovies = selectedYear
                ? movies.filter((movie) => movie.Year === selectedYear)
  : movies;
    
const fetchMovies=async ()=>{
    const data=await searchMovies(search);
    if(data.Response==="True"){
      const movieWithimdbRating=await Promise.all(
        data.Search.map(async (movie:any)=>{
          const details=await getMovieDetails(movie.imdbID)
          return{
            ...movie,
            imdbRating:details.imdbRating,
          }
        })
      )
    setMovies(movieWithimdbRating)
    }else{
        setMovies([])
    }
    console.log(data);
    
}
    useEffect(()=>{
        fetchMovies()
    },[])

    return(
        <>
     <div>

    <NavBar
  search={search}
  setSearch={setSearch}
  onSearch={fetchMovies}
  selectedYear={selectedYear}
  setSelectedYear={setSelectedYear}
  years={years}
/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        filteredMovies.map((movie:any)=>(
            <MovieCard key={movie.imdbID} movie={movie}/>
        ))
      }
      </div>
   
    </div>
        </>
    )
}
export default Home