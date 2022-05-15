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
    const [value,setValue]=useState([]);
    const [select, setSelect] = useState({
        name: props.curr.name,
        value: isMultiple?"":options[0]
    });
    
    function checkCohices(val){
        if (isMultiple){
            if (isRequired&&value.length===0) {
                setAlert(!requierdAlert);
            }
            if(value.includes(val)) {
                for (let i = 0; i < value.length; i++) {

                    if (value[i] === val) {
                        let obj = value[value.length - 1];
                        value[value.length - 1] = val;
                        value[i] = obj;
                        value.pop()
                    }

                }
            }
            else{
                value.push(val)
            }
            let str=""
            value.forEach(element => {
                str+=element+"-"
            });
            setSelect({...select,value:str})
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
                    {isRequired ?//(requierdAlert?<span>you have to chick at least one choice</span>:"")&&
                    <div>
                        <MdStar color='red'></MdStar>
                        <MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}/>
                        <span className='requiredCheckboxDiv'>
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
