

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
  onSearch: () => void;
};
const SearchBar=({search,setSearch,onSearch}:SearchBarProps)=>{
    return(
        <div className="flex flex-col sm:flex-row gap-4 ">
            <input type="text" placeholder="Search Movies" value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            className="border border-2 rounded-md ml-10"
            />
        <button onClick={onSearch}
        className=" text-white px-6 py-2 rounded-lg hover:bg-blue-700">Search</button>

        </div>
    
    )
}
export default SearchBar