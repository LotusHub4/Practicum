
import { useState } from 'react';
import '../form.css'
import { switchFunctions } from './switchFields';
import { MdStar } from 'react-icons/md';

export function EmailFunction(props) {

    let [isWrong, setIsWrong] = useState(false);
    let [wrongReason, setReason] = useState("")
    const [email, setEmail] = useState({
        name: props.curr.name,
        value: "",
    });


    function checkInput(value) {
        let res=switchFunctions(props.curr.funcName, props.curr.properties, value)

        if (res !== "OK") {
            setReason(res)
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
            <MdStar color='red'></MdStar>
                <input type="email" placeholder="example@example.com" required onBlur={(event) => checkInput(event.target.value)} />
            </div>
            {isWrong ? <span>{wrongReason}</span> : ""}

        </div>
    )
}
