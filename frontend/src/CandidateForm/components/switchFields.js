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



export function SwitchFields(props) {


    function pullFieldData(field) {

        if (field.value !== "" && !props.candidate.includes(field)) {
            props.candidate.push(field);
        }

    }

    switch (props.curr.type) {

        case "input":

            switch (props.curr.properties.inputType) {

                case "email":
                    return <EmailFunction curr={props.curr} func={pullFieldData} />

                case "tel":
                    return <TelFunction curr={props.curr} func={pullFieldData} />;

                case "number":
                    return <NumberFunction curr={props.curr} func={pullFieldData} />;

                default:
                    return <InputFunction curr={props.curr} func={pullFieldData} />

            }

        case "select":
            switch (props.curr.properties.multiple) {
                case true:
                    return <Select curr={props.curr} />;

                case false:
                    return <Select curr={props.curr} />;
                default:
                    break;
            }
            break;

        case "textArea":
            return <TextAreaFunction curr={props.curr} />


        default:
            break;
    }

}


function switchFunctions(funcName, properties, value) {
    switch (funcName) {
        case "checkRange":
            return checkRange(properties.min, properties.max, value);
        case "numOfDigits":
            return numOfDigits(properties.numDig, value);
        case "checknumOfDigitsAndAllDigits":
            return checknumOfDigitsAndAllDigits(properties.numDig, value);
        case "isAllDigits":
            return isAllDigits(value);
        case "checknumOfDigitsAndRange":
            return checknumOfDigitsAndRange(properties.min, properties.max, properties.numDig, value);
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
