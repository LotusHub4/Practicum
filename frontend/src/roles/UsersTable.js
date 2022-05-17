import React, { useEffect, useState } from 'react';
import './UsersTable.css';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdb-react-ui-kit";
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

export let Email = ""
export function setEmail(email) {
    Email = email
}
export function getemail() {
    return Email;
}

export function UsersTable() {
    let navigate = useNavigate();
    const UsersInfo = axios.get("http://localhost:5000/users/getAll");
    const [data, setData] = useState([]);
    const sortOptions = ["FirstName", "LastName", "Degree", "Role", "Location", "PhoneNumber", "User_id", "Email", "UserName", "Password"]
    useEffect(() => {
        loadUserData();
    }, []);
    const loadUserData = async () => {
        return await UsersInfo
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    };

    function DeletTheUser(index) {
        let email = `${data[index].Email}`
        console.log(email);
        console.log(email, "was deleted");
        axios.delete(`http://localhost:5000/users/${email}`)
    }

    function UpdateUserInfo(info) {
        setEmail(info)
        if (getemail() !== "")
            navigate('/UserCard')

    }

    return (
        <div>
            <MDBContainer className='mdbcontainer'>
                <a href="./Form"> <button className='AddUserbtn' >Add User</button></a>
                <div>
                    <MDBTable className='MDBTable'>
                        <MDBTableHead className='mdbtablehead'>
                            <tr>
                                <th className="Number" scope='col'>No.</th>
                                <th className="FirstName" scope='col'>FirstName</th>
                                <th className="LastName" scope='col'>LastName</th>
                                <th className='PhoneNumber' scope='col'> PhoneNumber</th>
                                <th className="Role" scope='col'>Role</th>
                                <th className='Email' scope='col'>Email</th>
                                <th className='Edit' scope='col'>Edit</th>
                                <th className='Delete' scope='col'>Delete</th>
                            </tr>
                        </MDBTableHead>
                        {data.length === 0 ? (
                            <MDBTableBody>
                                <tr>
                                    <td colSpan={8}>No Data Found</td>
                                </tr>
                            </MDBTableBody>
                        ) : (

                            data.map((user, index) => (
                                <MDBTableBody className='MDBTableBody' key={index}>
                                    <tr className='rowstr'>
                                        <th scope='row' className='numberItem'>{index + 1}</th>
                                        <td>{user.FirstName}</td>
                                        <td> {user.LastName}</td>
                                        <td>{user.PhoneNumber}</td>
                                        <td>{user.Role}</td>
                                        <td>{user.Email}</td>
                                        <td onClick={() => { UpdateUserInfo(user.Email) }}><BiEdit /></td>
                                        <td onClick={() => { DeletTheUser(index) }} ><AiFillDelete /></td>
                                    </tr>
                                </MDBTableBody>

                            ))
                        )}

                    </MDBTable>
                </div>
            </MDBContainer>
        </div>
    )
}
