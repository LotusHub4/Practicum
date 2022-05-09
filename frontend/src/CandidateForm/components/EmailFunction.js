
import { useState } from 'react';
import '../form.css'


export function EmailFunction(props) {

    const [email, setEmail] = useState({
        name: props.curr.name,
        value: ""
    });

    console.log(email);
    props.func(email)

    return (
        <div className='divAllemail'>
            <label className='emailLabel'> {props.curr.label}</label>

            <div className='emailInput'>
                <input type="email" placeholder="example@example.com" required onBlur={(event) => setEmail({ name: props.curr.name, value: event.target.value })} />
            </div>

        </div>
    )
}
