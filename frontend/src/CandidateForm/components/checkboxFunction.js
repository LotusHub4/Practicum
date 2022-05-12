import React from 'react'
import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';


export function CheckboxFunction(props) {
    const [checked, setChecked] = useState(false);

    const [input, setInput] = useState({
        name: props.curr.name,
        value: checked
    });

    props.func(input)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
                <input type="checkbox"  onBlur={()=>{setChecked(!checked);setInput({...input,value:checked})}} />
        </div>
    )
}
