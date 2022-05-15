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
        
        let res =switchFunctions(props.curr.funcName,props.curr.properties,value)
        console.log(res);
        if(res!=="OK" && res!==undefined){
            setReason(res)
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
                <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label} required onBlur={(event) => checkInput(event.target.value )} />
				</div>
                :
                <input type={props.curr.properties.inputType} placeholder={props.curr.label} onBlur={(event) => checkInput(event.target.value )} />
            }
            {isWrong?<span>{wrongReason}</span>:""}
        </div>
    )
}
