import React from 'react'
import "./NewField.css"
import blank from "../../images/ppp.png";
import { useNavigate } from "react-router-dom";
import  uuid from "react-uuid";
import axios from "axios";
export default function NewField() {
    const history = useNavigate();

    function createform(){
        var create_form_id = uuid();
        console.log(create_form_id)  

        history("/form/" + create_form_id)
    var questions_list=[{questionText: "Question", questionType:"radio", options : [{optionText: "Option 1"}], open: true, required:false}]
    
        axios.post(`http://localhost:5555/add_questions/${create_form_id}`,{
            "document_name": "untitled_form",
            "doc_desc": "Add Description",
            "questions": questions_list,
          })
    }
    return (
        <div className="template_section">
           <div className="template_top">

            <div className="template_right">

            
            </div>
            </div>
            <div className="template_body">
              <div className="card" onClick={createform}>
                  <img src={blank}  className="card_image" style={{}}/>
              </div>
            </div>
        </div>
    )
}

