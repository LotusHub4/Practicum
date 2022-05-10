import '../form.css'
import { useState } from 'react';

export function TextAreaFunction(props) {
    const isRequired = props.curr.requierd

    const [text, setText] = useState({
        name: props.curr.name,
        value: "",
        label: props.curr.label,
        type: ""
    });


    console.log(text);
    props.func(text)

    return (

        <div className='textAreaClass'>
            <label className='textAreaLabel'> {props.curr.label}</label>
            {isRequired ?
                <textarea maxLength={500} required onBlur={(event) => setText({ ...text, value: event.target.value })} />
                :
                <textarea maxLength={500} onBlur={(event) => setText({ ...text, value: event.target.value })} />
            }
        </div>

    )
}
