import { useEffect, useState } from 'react';
import axios from "axios";
import { TextAreaFunction } from './components/textAreaFunction';
import { EmailFunction } from './components/EmailFunction';
import { InputFunction } from './components/inputFunction';
import { Select } from './components/select';
import { TelFunction } from './components/telFunction';
import { NumberFunction } from './components/numberFunction';


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
                    return <EmailFunction {...curr} />

                case "tel":
                    return <TelFunction {...curr} />;

                case "number":
                    return <NumberFunction {...curr} />;

                default:
                    return <InputFunction {...curr} />

            }

        case "select":

            switch (curr.properties.multiple) {
                case true:
                    return <Select {...curr} />;

                case false:
                    return <Select {...curr} />;
                default:
                    break;

            }
            break;


        case "textArea":
            <TextAreaFunction {...curr} />
            break;

        default:
            break;

    }
}




// //=============== helping functions - for each field type ===============//

// //=== input types ===//
// function inputFunction(curr) {
//     const isRequired = curr.requierd

//     console.log(curr.required);
//     return (

//         <div className='Input'>
//             <label> {curr.label}</label>
//             {isRequired ?
//                 <div>
//                     <input type={curr.properties.inputType} placeholder={curr.label} required />
//                 </div>
//                 :
//                 <input type={curr.type} placeholder={curr.label} />
//             }

//         </div>
//     )

// }





