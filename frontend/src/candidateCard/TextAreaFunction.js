import './Candidatecard-new.css'
import { useState } from 'react';

export function TextAreaFunc(props) {
    const isRequired = props.curr.requierd

    const [text, setText] = useState({
        name: props.curr.name,
        value: ""
    });


    console.log(text);
    props.func(text)

    return (

        <div className='textAreaClass'>
            <label className='textAreaLabel'> {props.curr.label}</label>
            {isRequired ?
                <textarea maxLength={500} defaultValue={props.value} required onBlur={(event) => setText({ ...text, value: event.target.value })} />
                :
                <textarea maxLength={500} onBlur={(event) => setText({ ...text, value: event.target.value })} />
            }
        </div>

    )
}