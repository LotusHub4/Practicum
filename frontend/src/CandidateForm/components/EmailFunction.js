
import { useState } from 'react';
import '../form.css'


export function EmailFunction(props) {

    const [email, setEmail] = useState({
        name: props.curr.name,
        value: "",
        label: props.curr.label,
        type: ""
    });

    console.log(email);
    props.func(email)

    return (
        <div className='divAllemail'>
            <label className='emailLabel'> {props.curr.label}</label>

            <div className='emailInput'>
                <input type="email" placeholder="example@example.com" required onBlur={(event) => setEmail({ ...email, value: event.target.value })} />
            </div>

        </div>
    )
}
