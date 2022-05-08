//=========================//

import React from 'react'

export function Select(curr) {
    const isRequired = curr.requierd;
    const isMultiple = curr.properties.multiple;
    const options = curr.properties.selectOptions
    return (
        <div className='selectClass'>
            <label> {curr.label}</label>
            {isMultiple ?
                <div>
                    {isRequired ?

                        <select required id='options' multiple >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}

                        </select>
                        :
                        <select id='options' multiple >
                            {options.map((curr, i) => (
                                <option>{curr}</option>
                            ))}
                        </select>

                    }
                </div>
                :
                <div>
                    {isRequired ?

                        <select required >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}

                        </select>

                        :
                        <select >
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}
                        </select>
                    }
                </div>
            }
        </div>
    )
}
