import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from 'axios';

export function RolesTable() {
    const Roles = axios.get("http://localhost:5000/users/getRoles");
    const [roles, setroles] = useState([]);
    const sortOptions = ["Admin", "Super Admin"]
    useEffect(() => {
        loadUserData();
    }, []);
    const loadUserData = async () => {
        return await Roles
            .then((response) => {
                setroles(response.data)
                console.log(response.data)
            })
            .catch((err) => console.log(err));
    };
    function ChangeFunc() {
        console.log("55555");
    }
    return (
        <div>
            <MDBTable className='MDBTable'>
                <MDBTableHead className='mdbtablehead'>
                    <tr>
                        <th className="Number" scope='col'>Role</th>
                        <th className="FirstName" scope='col'>Edit Candidate</th>
                        <th className="LastName" scope='col'>Delete Candidate</th>
                        <th className='PhoneNumber' scope='col'> Add User</th>
                        <th className="Role" scope='col'>Edit User</th>
                        <th className='Email' scope='col'>Delete User</th>
                        <th className='Edit' scope='col'>Add Role</th>
                        <th className='Delete' scope='col'>Edit Role</th>
                        <th className='Delete' scope='col'>Delete Role</th>
                        <th className='Delete' scope='col'>Edit</th>
                        <th className='Delete' scope='col'>Delete</th>
                    </tr>
                </MDBTableHead>
                {roles.length === 1 ? (
                    <MDBTableBody>
                        <tr>
                            <td colSpan={8}>No Data Found</td>
                        </tr>
                    </MDBTableBody>
                ) : (

                    roles.map((role, index) => (
                        <MDBTableBody className='MDBTableBody' key={index}>
                            <tr className='rowstr'>
                                <th scope='row' className='numberItem'>{role.RoleName}</th>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td> {<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                                <td>{<input type="checkbox" onClick={() => { ChangeFunc() }} />}</td>
                            </tr>
                        </MDBTableBody>

                    ))
                )}

            </MDBTable>
        </div>
    )
}
