import React from 'react'
import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';
import { MdStar } from 'react-icons/md';

export function InputFunction(props) {
    const isRequired = props.curr.requierd
    let[isWrong,setIsWrong]=useState(false);
    let[wrongReason,setReason]=useState("")
    const [input, setInput] = useState({
        name: props.curr.name,
        value: ""
    });

    function checkInput(value){
        setReason(switchFunctions(props.curr.funcName,props.curr.properties,value))
        
        if(wrongReason!=="OK"){
            setIsWrong(!isWrong)
        }
        else{
            setIsWrong(false)
            setInput({...input,value:value})
        }
    }

    props.func(input)

    return (

        <div className='divAroundAllInput'>
            <label className='aroundLabel'> {props.curr.label}</label>
            {isRequired ?

<div>
                    <MdStar color='red'></MdStar>
                <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label} required onBlur={(event) => setInput({ ...input, value: event.target.value })} />
				</div>
                :
                <input type={props.curr.type} placeholder={props.curr.label} onBlur={(event) => checkInput(event.target.value )} />
            }
            {isWrong?<span>{wrongReason}</span>:""}
        </div>
    )
}
