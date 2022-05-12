//=========================//

import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md';
import { useEffect, useState } from 'react';
import '../form.css'
import { MdStar } from 'react-icons/md';


export function Select(props) {
    let [more, setOpen] = useState(false)
    const isRequired = props.curr.requierd;
    const isMultiple = props.curr.properties.multiple;
    const options = props.curr.properties.selectOptions;
    let [requierdAlert,setAlert]=useState(false);

    const [select, setSelect] = useState({
        name: props.curr.name,
        value: isMultiple?[]:options[0]
    });
    function checkCohices(val){
        if (isMultiple){
            if (isRequired&&select.value.length===0) {
                setAlert(!requierdAlert);
            }
            if(select.value.includes(val)) {
                for (let i = 0; i < select.value.length; i++) {

                    if (select.value[i] === val) {
                        let obj = select.value[select.value.length - 1];
                        select.value[select.value.length - 1] = val;
                        select.value[i] = obj;
                        select.value.pop()
                    }

                }
            }
            else{
                setSelect({ ...select, value: [...select.value,val] })
            }
        }
        else{
            setSelect({...select,value:val})
        }
    }

    props.func(select)

    return (
        <div className='selectClass'>
            <label className='selectLabel'> {props.curr.label}</label>
            {isMultiple ?
                <div className='selectClassinput'>
                    {isRequired ?(requierdAlert?<span>you have to chick at least one choice</span>:"")&&
                    <div>
                        <MdStar color='red'></MdStar>
                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div key={i}>
                                        <input type="checkbox" className='myCheckBox' value={curr.name} onClick={() => checkCohices(curr)} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span></div>

                        :
                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div key={i}>
                                        <input type="checkbox" class='myCheckBox' value={curr.name} onChange={() => setSelect({ ...select, value: [...select.value,curr] })} /> <label> {curr}</label>
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
                                <option key={i}> {curr}</option>
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
