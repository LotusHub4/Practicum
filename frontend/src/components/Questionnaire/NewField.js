import React from 'react'
import "./NewField.css"
import blank from "../../images/ppp.png";
import { useNavigate } from "react-router-dom";
import  uuid from "react-uuid";
export default function NewField() {
    const history = useNavigate();

    function createform(){
        var create_form_id = uuid();
        history("add/form/" + create_form_id)
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

