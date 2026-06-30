type FilterBarProps = {
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  years: string[];
};
const Filterbar=({selectedYear,setSelectedYear,years}:FilterBarProps)=>{
    return(
        
        <div className="mb-6">
            <label className="mr-3 font-semibold">Filter By Year</label>
            <select value={selectedYear} onChange={(e)=>setSelectedYear(e.target.value)} 
            className="border border-gray-300 rounded-lg px-4 py-2">
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
export default Filterbar