
import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';

export function EmailFunction(props) {

    let [isWrong, setIsWrong] = useState(false);
    let [wrongReason, setReason] = useState("")
    const [email, setEmail] = useState({
        name: props.curr.name,
        value: "",
    });


    function checkInput(value) {
        setReason(switchFunctions(props.curr.funcName, props.curr.properties, value))

        if (wrongReason !== "OK") {
            setIsWrong(!isWrong)
        }
        else {
            setIsWrong(false)
            setEmail({ ...email, value: value })
        }
    }

    props.func(email)

    return (
        <div className='divAllemail'>
            <label className='emailLabel'> {props.curr.label}</label>

            <div className='emailInput'>
                <input type="email" placeholder="example@example.com" required onBlur={(event) => checkInput(event.target.value)} />
            </div>
            {isWrong ? <span>{wrongReason}</span> : ""}

        </div>
    )
}
