import React, { useState, useEffect } from 'react'
import "./AllFields.css"
import NavigateToField from "./NavigateToField"
import axios from "axios";
import { IconButton } from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
export default function AllFields() {
    const [files, setFiles] = useState([]);
    const [data, setData] = useState([]);



    useEffect(() => {
        async function filenames() {
            var request = await axios.get("http://localhost:5555/questionnaire/get_all_files");
            let files = request.data.questions;
            setFiles(files);
            setData(files)

        }
        filenames()

    }, [])
    function handleSearch(text) {
        let FilterQuestions = [];
        if (text == "") {
            setFiles(data);
        }
        else{
            for (let i = 0; i < data.length; i++) {
                if (data[i].questionText.toLowerCase().includes(text.toLowerCase())) {
                    FilterQuestions[i]=data[i];
    
                }
                setFiles(FilterQuestions);
    
            }
        }
        
        
    }
    return (
        <div className="mainbody">
            <div className="header_search">
                <IconButton><SearchIcon /></IconButton>
                <input type="text" placeholder="Search" onChange={(e) => { handleSearch(e.target.value) }} />
            </div>
            <div className="main_top">
                <div className="main_top_left" style={{ fontSize: "16px", fontWeight: "500" }}>Recent Fields</div>

            </div>
            <div className="main_docs">
                {
                    files.map((ele, i) => (
                        <NavigateToField key={i} name={ele} />
                    ))
                }
            </div>
        </div>
    )
}


