import React from 'react'
import '../form.css'

export function TelFunction(props) {

    return (
        <div className='divAllTel'>
            <label className='telLabel'> {props.curr.label}</label>

            <div className='telInput'>
                <label >05 </label>
                <input type="tel" placeholder="0-655-5919" required />
            </div>

        </div>
    )
}
