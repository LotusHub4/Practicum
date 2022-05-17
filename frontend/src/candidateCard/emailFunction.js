
import { useState } from 'react';
import './Candidatecard-new.css'


export function EmailFunc(props) {

    const [email, setEmail] = useState({
        name: props.curr.name,
        value: ""
    });



    // console.log(props);
    // console.log(props.curr);
    // console.log(props.func);
    // console.log(props.value);
    // console.log(Namee);




    console.log(email);
    props.func(email)

    return (
        <div className='divAllemail'>
            <label className='emailLabel'> {props.curr.label}</label>

            <div className='emailInput'>
                <input type="email" placeholder="example@example.com" defaultValue={props.value} required onBlur={(event) => setEmail({ ...email, value: event.target.value })} />
            </div>

        </div>
    )
}