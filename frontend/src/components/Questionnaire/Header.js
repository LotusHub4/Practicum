import {  IconButton } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";


export default  function Header() {
    return (
        <div className="header">

            <div className="header_info">
            </div>
            <div className="header_search">
               <IconButton><SearchIcon /></IconButton>
                <input type="text" placeholder="Search"/>
            </div>   
            <div className="header_right">
            </div>          

        </div>
    )
}


