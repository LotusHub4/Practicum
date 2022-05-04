import './Report.css';
import axios from "axios";
// import { useState , useEffect } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer} from "mdb-react-ui-kit";

export function Report(){
  const [data, setData] = useState([]);
  useEffect (() => {
    loadUserData();
  }, []);
  const loadUserData = async() => {
    return await axios 
    .get("http://localhost:5555/candidates")
    .then((response) => setData(response.data))
    .catch((err) => console.log(err));
  };
  console.log(data, "this is our data");

  return(
    <div className='container'>
    <MDBContainer className='mdbcontainer'>
      <div className='mdbrow'>
        <h2 className='candidateword'>
         Candidates 
        </h2>
    <MDBRow>
      <MDBCol className='mdbcolumn'>

      </MDBCol>
      <MDBTable className='MDBTable'>
        <MDBTableHead className='mdbtablehead'>
        <tr>
          <th className="Number" scope='col'>No.</th>
          <th className="Name" scope='col'>Name</th>
          <th className='Interest' scope='col'> Interest</th>
          <th className="English" scope='col'>English Level</th>
          <th className='Math' scope='col'>Math Level</th>
          <th className='Marital' scope='col'>Marital</th>
          <th className='LivingArea' scope='col'>Living Area</th>
        </tr>
        </MDBTableHead>
        {data.length === 0 ? (
          <MDBTableBody>
            <tr>
              <td colSpan={8}>No Data Found</td>
            </tr>
          </MDBTableBody>
        ):(
           data.map((item,index) => (
             <MDBTableBody className='MDBTableBody' key={index}>
               <tr>
                 <th scope='row' className='numberItem'>{index + 1}</th>
                 <td>{item.firstName} {item.lastName}</td>
                 <td>{item.interest}</td>
                 <td>{item.englishLevel}</td>
                 <td>{item.mathLevel}</td>
                 <td>{item.maritalStatus}</td>
                 <td>{item.livingArea}</td>
               </tr>
             </MDBTableBody>
           ))
        )}
      </MDBTable>
    </MDBRow>
      </div>
    </MDBContainer>
    </div>
  )
}





























// export function Report() {
//   return (
//     <div className="allPage">
//       <div className="searchInput">
//         <input className="searchInput"></input>
//         <button className="searchButton"> Search</button>
//         <button className="resetButton"> Reset</button>
        
//       </div>
//     <div className="DataTable">
//       <table>
//         <tr>
//           <th className="Number">No.</th>
//           <th className="Name">Name</th>
//           <th className='Interest'> Interest</th>
//           <th className="English">English Level</th>
//           <th className='Math'>Math Level</th>
//           <th className='Marital'>Marital</th>
//           <th className='LivingArea'>Living Area</th>
//         </tr>
//       </table>

//       <div className="sort">
//         <label className="sortBy">Sort By:</label>
//         <select></select>
        
//       </div>


//     </div>
//     </div>
//   )
// }
































// --------------------------------------------------------
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