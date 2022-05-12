import '../form.css'
import { useState } from 'react';
import { MdStar } from 'react-icons/md';

export function TextAreaFunction(props) {
    const isRequired = props.curr.requierd

    const [text, setText] = useState({
        name: props.curr.name,
        value: ""
    });


    props.func(text)

    return (

        <div className='textAreaClass'>
            <label className='textAreaLabel'> {props.curr.label}</label>
            {isRequired ?
                <div>
                    <MdStar color='red'></MdStar>
                    <textarea maxLength={500} required onBlur={(event) => setText({ ...text, value: event.target.value })} />
                </div>
                :
                <textarea maxLength={500} onBlur={(event) => setText({ ...text, value: event.target.value })} />
            }
        </div>

    )
}
