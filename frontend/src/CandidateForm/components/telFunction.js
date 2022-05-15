import React from 'react'
import '../form.css'
import { useState } from 'react';
import { switchFunctions } from './switchFields';
import { MdStar } from 'react-icons/md';


export function TelFunction(props) {
    const isRequired = props.curr.requierd
    let [isWrong, setIsWrong] = useState(false);
    let [wrongReason, setReason] = useState("")
    const [phone, setPhone] = useState({
        name: props.curr.name,
        value: ""
    });

    function checkTel(value) {
        let res=switchFunctions(props.curr.funcName, props.curr.properties, value)

        if (res !== "OK") {
            setReason(res)
            setIsWrong(!isWrong)
        }
        else {
            setIsWrong(false)
            setPhone({ ...phone, value: "05"+value })
        }
    }
    props.func(phone)

    return (
        <div className='divAllTel'>
            <label className='telLabel'> {props.curr.label}</label>
            <label >05 </label>
            {isRequired ?
                <div>
                    <MdStar color='red'></MdStar>
                    <input className='telInput' type={props.curr.properties.inputType} placeholder="0-655-5919" required onBlur={(event) => checkTel(event.target.value)} />
                </div>
                :
                <input type={props.curr.type} placeholder="0-655-5919" onBlur={(event) => checkTel(event.target.value)} />
            }
            {isWrong ? <span>{wrongReason}</span> : ""}
        </div>
    )
}
