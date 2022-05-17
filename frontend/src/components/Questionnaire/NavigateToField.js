import React, { useState, useEffect } from 'react'
import "./NavigateToField.css"
import StorageIcon from '@material-ui/icons/Storage';
import doc_image from "../../images/form-example.png";
import { useNavigate } from "react-router-dom";


export default function NavigateToField({ name }) {

    const history = useNavigate();
    const [data, setData] = useState({});
    function navigate_to(docname) {
        var fname = docname.split(".");
        history("update/form/" + fname[0])

    }

    useEffect(() => {
        setData(name);

    }, [])
    return (
        <div className="doc_card" onClick={() => {
            navigate_to(data.file)
        }}>
            <img src={doc_image} className="doc_card_image"></img>
            <div className="doc_card_content">
                <h5 style={{ overFlow: "ellipsis" }}>{data.questionText}</h5>
                <div className="doc_content">
                    <div className="content_left" style={{ fontSize: "12px", color: "grey" }}>
                        <StorageIcon style={{ color: "white", fontSize: "12px", backgroundColor: "#FFDAC4", padding: "3px", marginRight: "3px", borderRadius: "2px" }} />   {data.date}
                    </div>


                </div>
            </div>
        </div>
    )
}


