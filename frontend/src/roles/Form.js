import { useState } from "react";
import './AddUser.css'
import axios from 'axios';

export function Form() {
    const [userinfo, setuserinfo] = useState({
        FirstName: "",
        LastName: "",
        Degree: "",
        Role: "",
        Location: "",
        PhoneNumber: "",
        User_id: "",
        Email: "",
        UserName: "",
        Password: "",
    })

    function ChangeFun(e, whichField) {
        let newObj = {
            ...userinfo,
            ...{
                [whichField]: e.target.value
            }
        };
        setuserinfo(newObj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/users/AddOne", {
            "FirstName": `${(document.querySelector('#FirstName')).value}`,
            "LastName": `${(document.querySelector('#LastName')).value}`,
            "Degree": `${(document.querySelector('#Degree')).value}`,
            "Role": `${(document.querySelector('#Role')).value}`,
            "Location": `${(document.querySelector('#Location')).value}`,
            "PhoneNumber": `${(document.querySelector('#PhoneNumber')).value}`,
            "User_id": `${(document.querySelector('#Email')).value}`,
            "Email": `${(document.querySelector('#Email')).value}`,
            "UserName": `${(document.querySelector('#UserName')).value}`,
            "Password": `${(document.querySelector('#Password')).value}`,
        })
            .then((resulte) => {
                console.log(resulte.data);
            });
    }



    return (
        <div className='allItems'>
            <div className='logoimg'><img src='./lotus.jpeg' alt='' /></div>
            <form id="AddUserForm" className="AddUserForm" onSubmit={(e) => { handleSubmit(e) }}>
                <div className='parag'>
                    <h3> Add User Form </h3>
                </div>
                <div className='NameDegree'>
                    <h4>Name:</h4>
                    <input type="text" className="FirstName" id="FirstName" placeholder='First name' onChange={(e) => { ChangeFun(e, "FirstName") }} />
                    <input type="text" className="LasttName" id="LastName" placeholder='Last name' onChange={(e) => { ChangeFun(e, "LastName") }} />
                    <h4>Degree:</h4>
                    <input type="text" className="Degree" id="Degree" onChange={(e) => { ChangeFun(e, "Degree") }} />
                </div>
                <div className='RolLocPhon'>
                    <h4>Role:</h4>
                    <select className='Role' id="Role" onChange={(e) => { ChangeFun(e, "Role") }}>
                        <option value={"Choose"}>Choose</option>
                        <option value={"Admin"}>Admin</option>
                        <option value={"SuperAdmin"}>Super Admin</option>
                        <option value={"Viewer"}>Viewer</option>
                    </select>

                    <h4>Location:</h4>
                    <select className='Location' id="Location" onChange={(e) => { ChangeFun(e, "Location") }}>
                        <option value={"Choose"}>Choose</option>
                        <option value={"Yarka"}>Yarka</option>
                        <option value={"isfiya"}>isfiya</option>
                        <option value={"Daliat-elcarmel"}>Daliat-elcarmel</option>
                        <option value={"TLV"}>TLV</option>
                        <option value={"Haifa"}>Haifa</option>
                    </select>

                    <h4>Phone number:</h4>
                    <input type="tel" className="PhoneNumber" id="PhoneNumber" placeholder='xxx-xxxxxxx' onChange={(e) => { ChangeFun(e, "PhoneNumber") }} />
                    <input type="tel" className=" User_id" id=" User_id" placeholder='xxxxxxxxx' onChange={(e) => { ChangeFun(e, " User_id") }} />
                </div>
                <div className='Email'>
                    <h4>Email:</h4>
                    <input type="text" className="Email" id="Email" placeholder='Email@Lotus.com' onChange={(e) => { ChangeFun(e, "Email") }} />
                </div>
                <div className='UserNamePasswordSubmit'>
                    <h4>User name:</h4>
                    <input type="text" className="UserName" id="UserName" onChange={(e) => { ChangeFun(e, "UserName") }} />
                    <h4>Password:</h4>
                    <input type="Password" className="Password" id="Password" onChange={(e) => { ChangeFun(e, "Password") }} />
                    <input id='submit' type="submit" value={"Submit"} />
                </div>
            </form>
        </div>
    )
}
