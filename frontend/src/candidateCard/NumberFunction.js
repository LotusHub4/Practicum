
//if the user didnt choose number , will open checkbox that asks if the user has no degrees, to do data analyst //

import { useState } from 'react';
import './Candidatecard-new.css'


export function NumberFunc(props) {

    const [number, setNumber] = useState({
        name: props.curr.name,
        value: ""
    });


    props.func(number)

    return (
        <div className='divAroundAllNumber'>
            <label className='numberLabel'> {props.curr.label}</label>

            <div className='numberInput'>
                <input type="number" defaultValue={props.value} min={props.curr.properties.min} max={props.curr.properties.max} onBlur={(event) => setNumber({ ...number, value: event.target.value })} />

            </div>

        </div>
    )
}