import './Report.css';
// import axios from "axios";
// import { useState , useEffect } from 'react-router-dom';

export function Report() {
  // const [candidatesArr, setCandidatesArr] =
  //   useState(
  //           [{
  //               id: "",
  //               firstName: "",
  //               lastName: "",
  //               mail: "",
  //               phoneNumber: "",
  //               interest: "",
  //               maritalStatus: "",
  //               kidsNumber: "",
  //               livingArea: "",
  //               village: "",
  //               birthDate: "",
  //               mathLevel: "",
  //               mathGrade: "",
  //               englishLevel: "",
  //               englishGrade: "",
  //               psychometry: "",
  //               travelling: "",
  //               morningWork: "",
  //               childrenArrangement: "",
  //               studiesCombined: "",
  //               adjustment: "",
  //               CV: "",
  //               matriculationGrades: "",
  //               psychometricGrade: "",

  //           }]);
  //   useEffect(() => {
  //       axios.get('http://127.0.0.1:5555/allcandidates')
  //           .then(candidates => {
  //             setCandidatesArr(candidates.data);
  //               console.log(candidates);
  //           });

  //   }, []);

  //   return (
  //     <div className="CandidateData">
  //             {candidatesArr.map((curr, i) => {
  //                 console.log("-----------");
  //                 console.log(curr);
  
  //                 return <CandidateData key={i} {...curr} ></CandidateData>;
  //             })}
  //         </div >
  // );
  // }
  return (
    <div className="allPage">
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
        <label className="sortBy">Sort By:</label>
        <select></select>
        
      </div>


    </div>
    </div>
  )
}
