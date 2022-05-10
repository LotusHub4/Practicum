import React from 'react'
import { useState } from 'react';
import '../form.css'

export function InputFunction(props) {
    const isRequired = props.curr.requierd

    const [input, setInput] = useState({
        name: props.curr.name,
        value: "",
        label: props.curr.label,
        type: ""
    });


    console.log(input);
    props.func(input)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
            {isRequired ?


                <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label} required onBlur={(event) => setInput({ ...input, value: event.target.value })} />
                :
                <input type={props.curr.type} placeholder={props.curr.label} onBlur={(event) => setInput({ ...input, value: event.target.value })} />
            }
        </div>
    )
}
