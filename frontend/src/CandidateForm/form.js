import { useEffect, useState } from 'react';
import axios from "axios";

export function Form() {

    const [fields, setFields] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5555/candidateForm/allFields')
            .then(response => {
                setFields(response.data);
                console.log(response.data);
            });
    }, [])

    return (

        <div>
            {fields.map((curr, i) => (<div key={i}> {switchField(curr)} </div>))}

        </div>
    )


}

function switchField(curr) {
    switch (curr.type) {

        case "input":
            switch (curr.properties.inputType) {

                case "email":
                    return emailFunction(curr);
                case "tel":
                    return telFunction(curr);

                case "number":
                    return numberFunction(curr);

                default:
                    return inputFunction(curr);
            }

        case "select":

            switch (curr.properties.multiple) {
                case true:
                    return selectFunction(curr);

                case false:
                    return "false";
                default:
                    break;

            }
            break;


        case "textArea":
            return textAreaFunction(curr);

        default:
            break;

    }
}




//=============== helping functions - for each field type ===============//

//=== input types ===// 
function inputFunction(curr) {
    const isRequired = curr.requierd

    console.log(curr.required);
    return (

        <div className='Input'>
            <label> {curr.label}</label>
            {isRequired ?
                <div>
                    <input type={curr.properties.inputType} placeholder={curr.label} required />
                </div>
                :
                <input type={curr.type} placeholder={curr.label} />
            }

        </div>
    )

}


function emailFunction(curr) {
    const isRequired = curr.requierd
    return (
        <div className='emailInput'>
            <label> {curr.label}</label>
            {isRequired ?
                <div>
                    <input type="email" placeholder="example@example.com" required />
                </div>
                :
                <input type="email" placeholder="example@example.com" />
            }
        </div>
    )
}

function telFunction() {
    return (
        <div className='telInput'> input </div>
    )
}



function numberFunction() {
    return (
        <div className='numberInput'> input </div>
    )
}


//=========================//
function selectFunction() {

    return (
        <div className='selectClass'>
            <label>
                select
            </label>

        </div>
    )
}

//==========================//
function textAreaFunction() {

    return (
        <div className='textAreaClass'> text area</div>
    )
}