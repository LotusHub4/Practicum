import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import { SwitchFieldsFunc } from './SwitchFields';
import './Candidatecard-new.css'
import { FcBusinesswoman } from 'react-icons/fc'




export function Cardcandidate() {

    let [candidate, setcandidate] = useState([]);

    const [fields, setFields] = useState([]);
    const [values, setValues] = useState([{}]);



    function mySubmit(e) {
        e.preventDefault()
        console.log(candidate);


        for (let i = 0; i < candidate.length; i++) {
            let Namee = candidate[i].name;
            if (candidate[i].value == "") {
                console.log(candidate.value);
                candidate[i].value = values[Namee];
            }

            else {
                console.log(candidate[i].value);
            }
        }
        console.log(candidate);

        // axios.put('http://localhost:5555/candidateCard/updateCandidateInfo/1', { candidate })
        //     .then(res => {
        //         console.log(res.data);
        //         alert('info has been saved');
        //     })
    }


    useEffect(() => {
        axios.get('http://localhost:5555/candidateCard/allFields')
            .then(response => {
                setFields(response.data);
                console.log(response.data);
            });
    }, [])


    useEffect(() => {
        axios.get('http://localhost:5555/candidateCard/1')
            .then(response => {
                setValues(response.data[0]);
                console.log(response.data[0]);
            });
    }, [])

    console.log('obj: ' + values.firstName);

    // function formWasSubmitted() {
    //     if (button.button = true) {
    //         console.log(button.button);
    //     }



    // }
    // if (button.button === 2) {
    //     e.preventDefault();
    //     let url2 = url1 + (newuser.Email);
    //     console.log(url2);

    //     axios.delete(url2)

    //         .then(res1 => {
    //             console.log(res1.data);
    //         })
    //     alert("user has been deleted");

    // }


    function editInput() {
        //     let inputs = fields.input
        //     // inputs.disabled = !inputs.disabled
        //     if (inputs.disabled) {
        //         inputs.disabled = false
        //     }
        //     else {
        //         inputs.disabled = true

        //     }

    }

    return (

        <div className='Role'>
            <div className='logoimg'><img src='./lotus.jpg' alt='' /></div>
            <div className='header'><h3>Candidate Card</h3></div>

            <form className='divAroundAll' onSubmit={(e) => { mySubmit(e) }}>
                <div className='icons' >
                    <FcBusinesswoman className='candidateicon' />
                    {/* <FiEdit className='edit-icon' /> */}
                </div>

                {fields.map((curr, i) =>

                (
                    <div className='divAroundAllForm' key={i}>
                        {/* {SwitchFields(curr, values[i])} */}
                        <SwitchFieldsFunc curr={curr} value={values} candidate={candidate} />

                    </div>
                ))}

                <input type="submit" value='Submit' />
                {/* <input id='submit' type="submit" value="Save Info" /> */}
            </form>

        </div>

    )


}



