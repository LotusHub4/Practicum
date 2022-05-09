import React from 'react'

export function InputFunction(curr) {
    const isRequired = curr.requierd

    console.log(curr.required);
    return (

        <div className='Input'>
            <label> {curr.label}</label>
            {isRequired ?
                <div>
                    <input type={curr.properties.inputType} placeholder={curr.label} required />
                </div>
                :
                <input type={curr.type} placeholder={curr.label} />
            }

        </div>
    )
}
