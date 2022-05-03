import './Report.css';

export function Report() {
  return (
    <div className="allTheBadge">
      <div className="searchInput">
        <input className="searchInput"></input>
        <button className="searchButton"> Search</button>
        <button className="resetButton"> Reset</button>
        
      </div>
    <div className="DataTable">
      <table>
        <tr>
          <th className="Number">No.</th>
          <th className="Name">Name</th>
          <th className='Interest'> Interest</th>
          <th className="English">English Level</th>
          <th className='Math'>Math Level</th>
          <th className='Marital'>Marital</th>
          <th className='LivingArea'>Living Area</th>
        </tr>
      </table>

      <div className="sort">
        <label className="soetBy">Sort By:</label>
        <select></select>
        
      </div>


    </div>
    </div>
  )
}
