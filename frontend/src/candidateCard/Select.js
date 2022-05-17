// //=========================//

//=========================//

import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md';
import { useEffect, useState } from 'react';
import './Candidatecard-new.css'
import { MdStar } from 'react-icons/md';


export function SelectFunc(props) {
    let [more, setOpen] = useState(false)
    const [checked, setChecked] = useState(false);
    const isRequired = props.curr.requierd;
    const isMultiple = props.curr.properties.multiple;
    const options = props.curr.properties.selectOptions;
    let [requierdAlert, setAlert] = useState(false);
    const [value, setValue] = useState([]);
    const [select, setSelect] = useState({
        name: props.curr.name,
        value: isMultiple ? "" : options[0]
    });

    function checkCohices(val) {
        console.log(val, value);
        if (isMultiple) {
            if (isRequired && value.length === 0) {
                setAlert(!requierdAlert);
            }
            if (value.includes(val)) {
                for (let i = 0; i < value.length; i++) {

                    if (value[i] === val) {
                        let obj = value[value.length - 1];
                        value[value.length - 1] = val;
                        value[i] = obj;
                        value.pop()
                    }

                }
            }
            else {
                value.push(val)
            }
            let str = ""
            value.forEach(element => {
                str += element + "-"
            });
            setSelect({ ...select, value: str })
        }
        else {
            setSelect({ ...select, value: val })
        }
    }
    props.func(select)
    console.log(props.value);
    console.log(value);
    // useEffect(() => {
    function yaya() {
        const valueSplit = props.value

        const zzz = valueSplit.split('-')
        for (let i = 0; i < zzz.length; i++) {
            value.push(zzz[i])

        }
        // setValue(zzz)
        //value.push(zzz)
        console.log(zzz);
        console.log(value);
    }

    // function checkedInput() {
    //     const isChecked = value.includes(curr) ? !checked : checked;
    //     console.log(isChecked);
    // }



    return (
        <div className='selectClass'>
            <label className='selectLabel'> {props.curr.label}</label>
            {isMultiple ?
                <div className='selectClassinput'>
                    {isRequired ?//(requierdAlert?<span>you have to chick at least one choice</span>:"")&&
                        <div>
                            <MdStar color='red'></MdStar>
                            <MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more); yaya() }} />
                            <span className='requiredCheckboxDiv'>
                                {
                                    more ? options.map((curr, i) => (

                                        <div key={i} className={i}>
                                            <input checked={value.includes(curr) ? true : false} value={curr.name} type="checkbox" className='myCheckBox' onClick={() => checkCohices(curr)} /> <label> {curr}</label>
                                        </div>
                                    )) : ""

                                }
                            </span></div>

                        :
                        <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
                            {
                                more ? options.map((curr, i) => (
                                    <div key={i}>
                                        <input type="checkbox" checked={value[i] === { curr } ? true : false} value={curr.name} class='myCheckBox' onChange={() => setSelect({ ...select, value: [...select.value, curr] })} /> <label> {curr}</label>
                                    </div>
                                )) : ""

                            }
                        </span>


                    }
                </div>
                :
                <div className='selectClassinput'>
                    {isRequired ?

                        <select required defaultValue={options.filter(option =>
                            option === props.value)
                        } placeholder={props.value} onChange={(event) => setSelect({ ...select, value: event.target.value })}>
                            {options.map((curr, i) => (
                                <option key={i}> {curr}</option>
                            ))}

                        </select>

                        :
                        <select defaultValue={options.filter(option =>
                            option === props.value)}
                            placeholder={props.value} onChange={(event) => setSelect({ ...select, value: event.target.value })}>
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



























// import React from 'react'
// import { MdOutlineExpandMore } from 'react-icons/md';
// import { useEffect, useState } from 'react';
// import '../Candidatecard-new.css'


// export function Select(props) {
//     let [more, setOpen] = useState(false)
//     const isRequired = props.curr.requierd;
//     const isMultiple = props.curr.properties.multiple;
//     const options = props.curr.properties.selectOptions;


//     const [select, setSelect] = useState({
//         name: props.curr.name,
//         value: isMultiple ? [] : ""
//     });


//     // console.log(select);
//     // props.func(select)

//     return (
//         <div className='selectClass'>
//             <label className='selectLabel'> {props.curr.label}</label>
//             {isMultiple ?
//                 <div className='selectClassinput'>
//                     {isRequired ?

//                         <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
//                             {
//                                 more ? options.map((curr, i) => (
//                                     <div >
//                                         <input type="checkbox" className='myCheckBox' onClick={() => setSelect({ ...select, value: [...select.value, curr] })} /> <label> {curr}</label>
//                                     </div>
//                                 )) : ""

//                             }
//                         </span>

//                         :
//                         <span className='requiredCheckboxDiv'> {<MdOutlineExpandMore className='moreIcontrip' onClick={() => { setOpen(!more) }}></MdOutlineExpandMore>}
//                             {
//                                 more ? options.map((curr, i) => (
//                                     <div>
//                                         <input type="checkbox" class='myCheckBox' value={curr.name} onChange={() => setSelect({ ...select, value: [...select.value, curr] })} /> <label> {curr}</label>
//                                     </div>
//                                 )) : ""

//                             }
//                         </span>


//                     }
//                 </div>
//                 :
//                 <div className='selectClassinput'>
//                     {isRequired ?

//                         <select required onChange={(event) => setSelect({ ...select, value: event.target.value })}>
//                             {options.map((curr, i) => (
//                                 <option> {curr}</option>
//                             ))}

//                         </select>

//                         :
//                         <select onChange={(event) => setSelect({ ...select, value: event.target.value })}>
//                             {options.map((curr, i) => (
//                                 <option> {curr}</option>
//                             ))}
//                         </select>
//                     }
//                 </div>
//             }
//         </div>
//     )
// }