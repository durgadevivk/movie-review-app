type FilterBarProps = {
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  years: string[];
};
const FilterBar=({selectedYear,setSelectedYear,years}:FilterBarProps)=>{
    return(
        
        <div className="">
            <label className="mr-3 font-semibold">Filter By Year</label>
            <select value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)} 
            className="border border-gray-300 bg-orange-600 text-color-black rounded-lg px-4 py-2">
                <option value="">All Years</option>
            {
                years.map((year)=>(
                    <option key={year} value={year}>{year}</option>
                ))
            }
            </select>
        </div>
        
    )
}
export default FilterBar