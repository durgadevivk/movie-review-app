import { useEffect, useState } from "react"
import { searchMovies } from "../api"
import MovieCard from "../components/MovieCard"
import Searchbar from "../components/SearchBar"
import Filterbar from "../components/Filterbar"

const Home=()=>{
    const [movies,setMovies]=useState<any[]>([])
    const years = [...new Set(movies.map((movie) => movie.Year))];
    const [search,setSearch]=useState("batman")
    const [selectedYear, setSelectedYear] = useState("");
   
    const filteredMovies = selectedYear
                ? movies.filter((movie) => movie.Year === selectedYear)
  : movies;
    
const loadMovies=async ()=>{
    const data=await searchMovies(search);
    if(data.Response==="True"){
    setMovies(data.Search)
    }else{
        setMovies([])
    }
    console.log(data);
    
}
    useEffect(()=>{
        loadMovies()
    },[])

    return(
        <>
     <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-8">
        Movie Review App
      </h1>
      <Searchbar
        search={search}
        setSearch={setSearch}
        onSearch={loadMovies}
      />
      <Filterbar
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