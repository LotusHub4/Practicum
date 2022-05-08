import React from 'react'
import './UsersTable.css'
export function UsersTable() {
    return (
        <div className='usersTable'>
            <div className='logoimg'><img src='./lotus.jpg' alt='' /></div>
            <div>
                <div className='header'><button>Add User</button>
                    <p>Search</p></div>
            </div>
            <div className='table'>
                <tr>
                    <td >User Name</td>
                    <td>Role</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td >User Name</td>
                    <td>Role</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td> User Name</td>
                    <td>Role</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
                <tr>
                    <td >User Name</td>
                    <td>Role</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>

            </div>
        </div>
    )
}
