//=========================//

import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md';
import { useEffect, useState } from 'react';
import '../form.css'


export function Select(props) {
    let [more, setOpen] = useState(false)
    const isRequired = props.curr.requierd;
    const isMultiple = props.curr.properties.multiple;
    const options = props.curr.properties.selectOptions;


    const [select, setSelect] = useState({
        name: props.curr.name,
        value: [],
        label: props.curr.label,
        type: isMultiple ? "Multiple" : ""
    });


    console.log(select);
    props.func(select)

    return (
        <div className='selectClass'>
            <label className='selectLabel'> {props.curr.label}</label>
            {isMultiple ?
                <div className='selectClassinput'>
                    {isRequired ?

                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div >
                                        <input type="checkbox" className='myCheckBox' value={curr.name} onClick={() => setSelect({ ...select, value: [].push(curr.name) })} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span>

                        :
                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div>
                                        <input type="checkbox" class='myCheckBox' value={curr.name} onChange={() => setSelect({ ...select, value: [].push(curr.name) })} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span>


                    }
                </div>
                :
                <div className='selectClassinput'>
                    {isRequired ?

                        <select required onChange={(event) => setSelect({ ...select, value: event.target.value })}>
                            {options.map((curr, i) => (
                                <option> {curr}</option>
                            ))}

                        </select>

                        :
                        <select onChange={(event) => setSelect({ ...select, value: event.target.value })}>
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
