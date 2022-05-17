import React from 'react'
import { TextAreaFunction } from './textAreaFunction';
import { EmailFunction } from './EmailFunction';
import { InputFunction } from './inputFunction';
import { Select } from './select';
import { TelFunction } from './telFunction';
import { NumberFunction } from './numberFunction';
import { checkRange } from '../tests';
import { numOfDigits } from '../tests';
import { checknumOfDigitsAndAllDigits } from '../tests';
import { isAllDigits } from '../tests';
import { checknumOfDigitsAndRange } from '../tests';
import { isAllLetters } from '../tests';
import { checkEmail } from '../tests';
import { checkImgEnds } from '../tests';
import {isValidDate} from '../tests';
import { CheckboxFunction } from './checkboxFunction';
import { FileFunction } from './fileFunction';



export function SwitchFields(props) {


    function pullFieldData(field) {
        //This test is not working ! i need to do it better 
        if ( !props.candidate.includes(field)) {
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

    switch (props.curr.type) {

        case "input":

            switch (props.curr.properties.inputType) {

                case "email":
                    return <EmailFunction curr={props.curr} func={pullFieldData} />
                case "file":
                    return <FileFunction curr={props.curr} func={pullFieldData} />
                case "tel":
                    return <TelFunction curr={props.curr} func={pullFieldData} />;
                case "checkbox":
                    return <CheckboxFunction curr={props.curr} func={pullFieldData} />;
                case "number":
                    return <NumberFunction curr={props.curr} func={pullFieldData} />;

                default:
                    return <InputFunction curr={props.curr} func={pullFieldData} />

            }

        case "select":
            switch (props.curr.properties.multiple) {
                case true:
                    return <Select curr={props.curr} func={pullFieldData} />;

                case false:
                    return <Select curr={props.curr} func={pullFieldData} />;
                default:
                    break;
            }
            break;

        case "textArea":
            return <TextAreaFunction curr={props.curr} func={pullFieldData} />


        default:
            break;
    }

}


export function switchFunctions(funcName, properties, value) {
    switch (funcName) {
        case "checkRange":
            return checkRange(properties.min, properties.max, value);
        case "numOfDigits":
            return numOfDigits(value,properties.numDig);
        case "checknumOfDigitsAndAllDigits":
            return checknumOfDigitsAndAllDigits(value,properties.numDig);
        case "isAllDigits":
            return isAllDigits(value);
        case "checknumOfDigitsAndRange":
            return checknumOfDigitsAndRange( value, properties.numDig,properties.min, properties.max);
        case "isAllLetters":
            return isAllLetters(value);
        case "checkEmail":
            return checkEmail(value);
        case "checkImgEnds":
            return checkImgEnds(value);
        case "isValidDate":
            return isValidDate(value)
        default:
            break;
    }

}
