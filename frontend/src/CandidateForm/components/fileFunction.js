import React from 'react'
import { useState } from 'react';
import '../form.css'
import { MdStar } from 'react-icons/md';


export function FileFunction(props) {
    const isRequired = props.curr.requierd

    const [fileInput, setInput] = useState({
        name: props.curr.name,
        value:""
    });

    const saveFile=(e)=>{
        setInput({...fileInput,value:e.target.files[0]})
    }
    console.log(fileInput);
    props.func(fileInput)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
            {isRequired ?
                <div>
                    <MdStar color='red'></MdStar>
                    <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label} required onChange={saveFile} />
                </div>:
                <div>
                <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label}  onChange={saveFile} />
            </div>
                
                }
        </div>
    )
}