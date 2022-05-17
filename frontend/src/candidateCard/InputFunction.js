import React from 'react'
import { useState } from 'react';
import './Candidatecard-new.css'

export function InputFunc(props) {
    const isRequired = props.curr.requierd

    const [input, setInput] = useState({
        name: props.curr.name,
        value: "",
    });


    console.log(input);
    props.func(input)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
            {/* {isRequired ? */}


            <input className='divAroundInput' type={props.curr.type} defaultValue={props.value} placeholder={props.curr.label} required onBlur={(event) => setInput({ ...input, value: event.target.value })} />
            {/* // : */}
            {/* <input type={props.curr.type} placeholder={props.curr.label} value={props.value} onBlur={(event) => setInput({ ...input, value: event.target.value })} /> */}
            {/* } */}
        </div>
    )
}