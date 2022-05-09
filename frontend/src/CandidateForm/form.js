import { useEffect, useState } from 'react';
import axios from "axios";
import { TextAreaFunction } from './components/textAreaFunction';
import { EmailFunction } from './components/EmailFunction';
import { InputFunction } from './components/inputFunction';
import { Select } from './components/select';
import { TelFunction } from './components/telFunction';
import { NumberFunction } from './components/numberFunction';

import { SwitchFields } from './components/switchFields';


export function Form() {
    let [candidate, setcandidate] = useState([]);

    const [fields, setFields] = useState([]);
    function mySubmit(e) {
        e.preventDefault()
        console.log(candidate);

    }


    useEffect(() => {
        axios.get('http://127.0.0.1:5555/candidateForm/allFields')
            .then(response => {
                setFields(response.data);
                console.log(response.data);
            });
    }, [])


    return (
        <form className='divAroundAll' onSubmit={(e) => { mySubmit(e) }} >
            {fields.map((curr, i) => (<div className='divAroundAllForm' key={i}><SwitchFields curr={curr} candidate={candidate} /> </div>))}
            <input type="submit" />

        </form>
    )
}

