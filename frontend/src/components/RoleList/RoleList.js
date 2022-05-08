import React from 'react'
import './RoleList.css'
export function RoleList() {
    return (
        <div className='Role'>
            <div className='logoimg'><img src='./lotus.jpg' alt='' /></div>
            <div>
                <div className='header'><h3>Role List</h3></div>
                <div className='table'>

                    <tr>
                        <td></td>
                        <td >Edit Candidate</td>
                        <td>Delete Candidate</td>
                        <td>Add User</td>
                        <td>Edit User</td>
                        <td>Delete User</td>
                        <td>Add Role</td>
                        <td>Edit Role</td>
                        <td>Delete Role</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='firstTD'>Super Admin</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>Edit</td>
                        <td>Save</td>
                    </tr>
                    <tr>
                        <td className='firstTD'> Admin</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>Edit</td>
                        <td>Save</td>
                    </tr>
                    <tr>
                        <td className='firstTD'>Viewer</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>Edit</td>
                        <td>Save</td>
                    </tr>

                </div>

            </div>
        </div>

    )
}
