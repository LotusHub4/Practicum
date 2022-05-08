import React from 'react'
import "./NavigateToField.css"
import StorageIcon from '@material-ui/icons/Storage';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import doc_image from "../../images/form-example.PNG";
import { useNavigate  } from "react-router-dom";


export default function NavigateToField({name}) {
    const history = useNavigate ();

    function navigate_to(docname){
        var fname=docname.split(".");
        history("/form/" + fname[0])

    }
    return (
        <div className="doc_card" onClick={()=>{
            navigate_to(name)
        }}>
             <img src={doc_image} className="doc_card_image"></img>
             <div className="doc_card_content">
                <h5 style={{overFlow:"ellipsis"}}>{name ? name : " Untitled Doc" }</h5>
                <div className="doc_content">
                    <div className="content_left" style={{fontSize:"12px",color:"grey"}}>
                    <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#f18bbd",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>   Opened 4 May 2022
                    </div>
                    
                     <MoreVertIcon style={{color:"grey",fontSize:"16px"}} />
                </div>
             </div>
        </div>
    )
}

 
