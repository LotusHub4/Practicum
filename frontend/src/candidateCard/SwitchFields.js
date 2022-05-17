import React from 'react'
import { TextAreaFunc } from './TextAreaFunction';
import { EmailFunc } from './emailFunction';
import { InputFunc } from './InputFunction';
import { SelectFunc } from './Select';
import { TelFunc } from './TelFunction';
import { NumberFunc } from './NumberFunction';
import { checkRange } from '../CandidateForm/tests';
import { numOfDigits } from '../CandidateForm/tests';
import { checknumOfDigitsAndAllDigits } from '../CandidateForm/tests';
import { isAllDigits } from '../CandidateForm/tests';
import { checknumOfDigitsAndRange } from '../CandidateForm/tests';
import { isAllLetters } from '../CandidateForm/tests';
import { checkEmail } from '../CandidateForm/tests';
import { checkImgEnds } from '../CandidateForm/tests';
import { CheckboxFunc } from './CheckboxFunction';



export function SwitchFieldsFunc(props) {

    // console.log(props.value);
    // let name = props.curr.name
    // console.log(name);
    let Namee = props.curr.name;
    // console.log(props.value[Namee]);


    function pullFieldDataa(field) {
        //This test is not working ! i need to do it better 
        if (!props.candidate.includes(field)) {
            if (props.candidate.length === 0) {
                props.candidate.push(field);
            }
            else {
                let flag = false
                for (let i = 0; i < props.candidate.length; i++) {

                    if (props.candidate[i].name === field.name) {
                        let obj = props.candidate[props.candidate.length - 1];
                        props.candidate[props.candidate.length - 1] = props.candidate[i];
                        props.candidate[i] = obj;

                        props.candidate.pop()
                        props.candidate.push(field)
                        flag = true
                    }

                }
                if (!flag) {
                    props.candidate.push(field);
                }

            }

        }
    }

    // console.log(props.curr.value);
    switch (props.curr.type) {

        case "input":

            switch (props.curr.properties.inputType) {

                case "email":
                    return <EmailFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />

                case "tel":
                    return <TelFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />;
                case "checkbox":
                    return <CheckboxFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />;
                case "number":
                    return <NumberFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />;

                default:
                    return <InputFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />

            }

        case "select":
            switch (props.curr.properties.multiple) {
                case true:
                    return <SelectFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />;

                case false:
                    return <SelectFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />;
                default:
                    break;
            }
            break;

        case "textArea":
            return <TextAreaFunc curr={props.curr} value={props.value[Namee]} func={pullFieldDataa} />


        default:
            break;
    }

}


export function switchFunc(funcName, properties, value) {
    switch (funcName) {
        case "checkRange":
            return checkRange(properties.min, properties.max, value);
        case "numOfDigits":
            return numOfDigits(value, properties.numDig);
        case "checknumOfDigitsAndAllDigits":
            return checknumOfDigitsAndAllDigits(value, properties.numDig);
        case "isAllDigits":
            return isAllDigits(value);
        case "checknumOfDigitsAndRange":
            return checknumOfDigitsAndRange(value, properties.numDig, properties.min, properties.max);
        case "isAllLetters":
            return isAllLetters(value);
        case "checkEmail":
            return checkEmail(value);
        case "checkImgEnds":
            return checkImgEnds(value);

        default:
            break;
    }

}
