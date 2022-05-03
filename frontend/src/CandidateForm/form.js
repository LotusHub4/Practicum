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
            <input type="submit" />
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
                    return selectFunction(curr);
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

    return (
        <div className='emailInput'>
            <label> {curr.label}</label>

            <div>
                <input type="email" placeholder="example@example.com" required />
            </div>

        </div>
    )
}

// Look for nice way to show it //
function telFunction(curr) {

    return (
        <div className='telInput'>
            <label> {curr.label}</label>

            <div>
                <label>05 </label>
                <input type="tel" placeholder="0-655-5919" required pattern={[0 - 9] * 8} />
            </div>

        </div>
    )
}


//if the user didnt choose number , will open checkbox that asks if the user has no degrees, to do data analyst //
function numberFunction(curr) {

    return (

        <div className='numberInput'>
            <label> {curr.label}</label>

            <div>
                <input type="number" min={curr.properties.min} max={curr.properties.max} />

            </div>

        </div>


    )
}


//=========================//
function selectFunction(curr) {
    const isRequired = curr.requierd;
    const isMultiple = curr.properties.multiple;
    const options = curr.properties.selectOptions
    return (
        <div className='selectClass'>
            <label> {curr.label}</label>
            {isMultiple ?
                <div>
                    {isRequired ?

                        <select required id='options' multiple >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}

                        </select>
                        :
                        <select id='options' multiple >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}
                        </select>

                    }
                </div>
                :
                <div>
                    {isRequired ?

                        <select required >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}

                        </select>

                        :
                        <select >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}
                        </select>
                    }
                </div>
            }
        </div>
    )
}

//==========================//
function textAreaFunction(curr) {
    const isRequired = curr.requierd
    return (

        <div className='textAreaClass'>
            <label> {curr.label}</label>
            {isRequired ?
                <textarea cols={25} rows={20} maxLength={500} required />
                :
                <textarea cols={25} rows={20} maxLength={500} />
            }
        </div>

    )
}