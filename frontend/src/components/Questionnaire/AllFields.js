import React,{useState,useEffect} from 'react'
import "./AllFields.css"
import NavigateToField  from "./NavigateToField" 
import axios from "axios";

export default function AllFields() {
    const [files,setFiles]=useState([]);
  
    useEffect(() => {
        async function filenames(){
            
            var request = await axios.get("http://localhost:5555/questionnaire/get_all_files")
            let files = request.data;
            setFiles(files)
           
        }
        filenames()
        
    },[])

    
    return (
        <div className="mainbody">
            <div className="main_top">
              <div className="main_top_left" style={{fontSize:"16px",fontWeight:"500"}}>Recent Fields</div>
             
            </div>
            <div className="main_docs">
                 {
                    files.map((ele)=>(
                        <NavigateToField name={ele}/>
                    ))            
                 }
                 <NavigateToField />   
            </div>
        </div>
    )
}


