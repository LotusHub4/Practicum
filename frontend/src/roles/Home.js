import React from 'react'
import { useNavigate } from "react-router-dom";



export function Home() {
    let navigate = useNavigate();

    function NavigateMe(path) {
        navigate(path)
    }
    return (

        <div>
            <h3>Home</h3>
            <div>
                <button onClick={() => { NavigateMe("Login") }}>Login</button>
                <button onClick={() => { NavigateMe("UsersTable") }}>Users Table</button>
                <button>Candidate</button>
                <button onClick={() => { NavigateMe("Form") }}>Form</button>
                <button onClick={() => { NavigateMe("RolesTable") }}>Roles Table</button>

            </div>

        </div>
    )
}
