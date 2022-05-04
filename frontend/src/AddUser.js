import React from 'react'
import './AddUser.css'
import { BsExclamationSquare } from "react-icons/bs";

export function AddUser() {
    function ChangeFun() {

    }
    return (
        <div className='allItems'>
            <div className='logoimg'><img src='./lotus.jpeg' alt='' /></div>
            <form id="AddUserForm" className="AddUserForm">
                <div className='parag'>
                    <h3> Add User Form </h3>
                </div>
                <div className='NameDegree'>
                    <h4>Name:</h4>
                    <input type="text" className="FirstName" id="FirstName" placeholder='First name' onChange={ChangeFun()}></input>
                    <input type="text" className="LasttName" id="LastName" placeholder='Last name' onChange={ChangeFun()}></input>
                    <h4>Degree:</h4>
                    <input type="text" className="Degree" id="Degree" onChange={ChangeFun()}></input>
                </div>
                <div className='RolLocPhon'>
                    <h4>Role:</h4>
                    <select onChange={ChangeFun()}>
                        <option value={1}>Choose</option>
                        <option value={2}>Admin</option>
                        <option value={3}>Super Admin</option>
                        <option value={4}>Viewer</option>


                    </select>
                    <h4>Location:</h4>
                    <select onChange={ChangeFun()}>
                        <option value={1}>Choose</option>
                        <option value={2}>Yarka</option>
                        <option value={3}>isfiya</option>
                        <option value={4}>Daliat-elcarmel</option>
                        <option value={5}>TLV</option>
                        <option value={6}>Haifa</option>



                    </select>
                    <h4>Phone number:</h4>
                    <input type="tel" className="PhoneNumber" id="PhoneNumber" placeholder='xxx-xxxxxxx' onChange={ChangeFun()}></input>
                </div>
                <div className='Email'>
                    <h4>Email:</h4>
                    <input type="text" className="Email" id="Email" placeholder='Email@Lotus.com' onChange={ChangeFun()}></input>
                </div>
                <div className='UserNamePasswordSubmit'>
                    <h4>User name:</h4>
                    <input type="text" className="UserName" id="UserName" onChange={ChangeFun()}></input>
                    <h4>Password:</h4>
                    <input type="Password" className="Password" id="Password" onChange={ChangeFun()}></input><div className='Theicon'><BsExclamationSquare /></div>
                    <button type="Submit">Save</button>
                </div>
            </form>
        </div>
    )
}
