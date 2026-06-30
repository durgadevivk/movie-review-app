type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
};
const Searchbar=({search,setSearch,onSearch}:SearchBarProps)=>{
    return(
        <>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input type="text" placeholder="Search Movies" value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
        <button onClick={onSearch}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Search</button>

        </div>
        </>
    )
}
export default Searchbar