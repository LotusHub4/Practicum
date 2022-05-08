import React from 'react'

export function TelFunction(curr) {
    return (
        <div className='telInput'>
            <label> {curr.label}</label>

            <div>
                <label>05 </label>
                <input type="tel" placeholder="0-655-5919" required pattern={curr.properties.pattern} />
            </div>

        </div>
    )
}
