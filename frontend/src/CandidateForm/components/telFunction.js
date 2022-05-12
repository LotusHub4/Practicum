import React from 'react'
import '../form.css'
import { useState } from 'react';


export function TelFunction(props) {
    const [phone, setPhone] = useState({
        name: props.curr.name,
        value: ""
    });


    props.func(phone)

    return (
        <div className='divAllTel'>
            <label className='telLabel'> {props.curr.label}</label>

            <div className='telInput'>
                <label >05 </label>
                <input type="tel" placeholder="0-655-5919" required onBlur={(event) => setPhone({ ...phone, value: event.target.value })} />
            </div>

        </div>
    )
}
