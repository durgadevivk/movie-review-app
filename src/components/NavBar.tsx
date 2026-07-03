import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

type NavbarProps = {
  search: string;
  setSearch: (value: string) => void;
  onSearch: () => void;
  selectedYear: string;
  setSelectedYear:(value: string) => void ;
  years: string[];
};
const NavBar=({search,setSearch,onSearch,selectedYear,setSelectedYear,years}:NavbarProps)=>{
return(
    <>
     <nav className="bg-orange-700 text-white px-8 py-4 shadow-md mb-5">
      <div className="flex flex-col-3 items-center justify-between gap-4">
        
        {/* Left */}
        <h1 className="text-3xl font-bold whitespace-nowrap">
          🎬 Movie Review App
        </h1>

        {/* Middle */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearch={onSearch}
        />

        {/* Right */}
        <FilterBar
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          years={years}
        />
      </div>
    </nav>
    </>
)
}
export default NavBar