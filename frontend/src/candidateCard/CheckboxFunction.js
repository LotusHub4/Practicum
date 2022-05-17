import React from 'react'
import { useState } from 'react';
// import '../form.css'
// import { SwitchFunctions } from './SwitchFields';
import './Candidatecard-new.css'


export function CheckboxFunc(props) {
    const [checked, setChecked] = useState(false);

    const [input, setInput] = useState({
        name: props.curr.name,
        value: checked,
    });

    const isChecked = props.value === 1 ? !checked : checked;
    console.log(input);

    props.func(input)
    // function checkBoxValues() {
    //     if (props.value === 1) {
    //         value: checked
    //     }
    // }
    console.log(props.value);

    return (

        <div className='divAroundAllInput'>

            <label className='aroundLabel'> {props.curr.label}</label>
            {isChecked === true ?
                <input type="checkbox"
                    checked
                    onBlur={() => { setChecked(!checked); setInput({ ...input, value: checked }) }} />
                :

                <input type="checkbox"

                    onBlur={() => { setChecked(!checked); setInput({ ...input, value: checked }) }} />
            }

        </div>
    )
}
// page !== FormTitles.length - 1 ? () => { setPage((currPage) => currPage + 1) } :
//                                         () => { Navigate('./ConfirmReservation') }}