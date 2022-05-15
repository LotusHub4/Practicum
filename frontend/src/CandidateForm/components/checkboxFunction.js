import React from 'react'
import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';


export function CheckboxFunction(props) {
    let checked = false;

    const [input, setInput] = useState({
        name: props.curr.name,
        value: checked
    });
    console.log(input);
    props.func(input)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
                <input type="checkbox"  onBlur={()=>{checked=!checked;setInput({...input,value:checked})}} />
        </div>
    )
}
