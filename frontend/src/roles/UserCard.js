import React, { useEffect, useState } from 'react'
import { getemail } from './UsersTable';
import axios from 'axios';

export function UserCard() {
    const Email = getemail()
    console.log(Email);

    const url = 'http://localhost:5000/users/' + Email;
    const [users, setuser] = useState([{ FirstName: "", LastName: "", Degree: "", Role: "", Location: "", PhoneNumber: "", User_id: "", Email: "", UserName: "", Password: "" }]);
    console.log(users);
    useEffect(() => {

        axios.get(url)
            .then(async response => {
                setuser(response.data)
            });
    }, []);

    return (
        <div className="UserInfo">
            {users.map((curr, i) => {
                return <Card key={i} {...curr}  ></Card>
            })}
        </div>
    );
}
const Card = (props) => {
    return (<div className="Cards">
        <ul>
            <li><p>{props.FirstName}</p></li>
            <li><p>{props.LastName}</p></li>
            <li><p>{props.Email}</p></li>
        </ul>
    </div>)


}
