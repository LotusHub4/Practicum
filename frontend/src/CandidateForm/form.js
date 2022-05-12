import { useEffect, useState } from 'react';
import axios from "axios";
import { SwitchFields } from './components/switchFields';


export function Form() {
    let [candidate, setcandidate] = useState([]);

    const [fields, setFields] = useState([]);
    function mySubmit(e) {
        e.preventDefault()
        console.log(candidate);


        axios.post('http://127.0.0.1:5555/candidateForm/addCandidate', {
            candidate
        })
            .then(res => {
                console.log(res);
                console.log(res.data);

            })
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

