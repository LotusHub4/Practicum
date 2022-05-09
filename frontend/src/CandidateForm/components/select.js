//=========================//

import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md';
import { useEffect, useState } from 'react';
import '../form.css'


export function Select(curr) {
    let [more, setOpen] = useState(false)
    const isRequired = curr.curr.requierd;
    const isMultiple = curr.curr.properties.multiple;
    const options = curr.curr.properties.selectOptions;

    return (
        <div className='selectClass'>
            <label className='selectLabel'> {curr.curr.label}</label>
            {isMultiple ?
                <div className='selectClassinput'>
                    {isRequired ?

                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div >
                                        <input type="checkbox" className='myCheckBox' value={curr.name} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span>

                        :
                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div>
                                        <input type="checkbox" class='myCheckBox' value={curr.name} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span>


                    }
                </div>
                :
                <div className='selectClassinput'>
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
