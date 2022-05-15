
//if the user didnt choose number , will open checkbox that asks if the user has no degrees, to do data analyst //

import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';
import { MdStar } from 'react-icons/md';


export function NumberFunction(props) {
    const isRequired = props.curr.requierd

    let [isWrong, setIsWrong] = useState(false);
    let [wrongReason, setReason] = useState("")
    const [number, setNumber] = useState({
        name: props.curr.name,
        value: ""
    });
    function checkInput(value){
    let res=switchFunctions(props.curr.funcName, props.curr.properties, value)

    if (res !== "OK") {
        setReason(res)
        setIsWrong(!isWrong)
    }
    else {
        setIsWrong(false)
        setNumber({ ...number, value: value })
    }
    }

    props.func(number)

    return (
        <div className='divAroundAllNumber'>
            <label className='numberLabel'> {props.curr.label}</label>
            {isRequired ?

<div>
                    <MdStar color='red'></MdStar>
                <input className='divAroundInput' type={props.curr.properties.inputType} placeholder={props.curr.label} required onBlur={(event) => checkInput(event.target.value)} />
				</div>
                :
                <input className='divAroundInput' type={props.curr.type} placeholder={props.curr.label} required onBlur={(event) => checkInput(event.target.value)} />

            }
            {isWrong ? <span>{wrongReason}</span> : ""}
        </div>
    )
}
