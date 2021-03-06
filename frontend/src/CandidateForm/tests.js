export function checkRange(min, max, number) {
    console.log(number,min,max);
    let res = (number <= max) && (number >= min);
    console.log(res);
    if (!res) {
        return "the number must be between " + min + " and " + max;
    }
    return "OK";
}

export function numOfDigits(number, numDig) {
    let count = number.toString().length;
    let res = count === numDig;
    if (!res) {
        return "the number must contain " + numDig + " digits";
    }
    return "OK";

}
export function checknumOfDigitsAndAllDigits(number, numDig) {
    let res = /^\d+$/.test(number) && numOfDigits(number, numDig) === "OK";

    if (!res) {
        return "invalid phone number";
    }
    return "OK";
}
export function isAllDigits(number) {
    if (!(/^\d+$/.test(number)))
        return "must only contain numbers";
    return "OK";
}
export function checknumOfDigitsAndRange(number, numDig, min, max) {

    if (checkRange(min, max, number) !== "OK")
        return checkRange(min, max, number);
    if (numOfDigits(number, numDig) !== "OK") {
        return numOfDigits(number, numDig);
    }
    return "OK";

}

export function isAllLetters(str) {
    let res = false;
    for (const char of str) {
        res = char.toLowerCase() !== char.toUpperCase();
        if (!res)
            return "must only contain letters";
    }
    return "OK";
}

export function checkEmail(str) {
    for (const char of str) {
        let index = str.indexOf(char)
        if (char === '@' && index !== 0 && str[index + 1] !== '.')
        {
            return "OK";
        }
    }
    return "invalid email adress";
}

export function checkImgEnds(str) {
    let res = str.endsWith('.jpg') || str.endsWith('.jpeg') || str.endsWith('.png')
    if (!res) {
        return ("the img must be .jpg .jpeg .png file")
    }
    return true;

}

export function isValidDate(date) {
    let year=date.substring(0, 4);
    let yearNow=new Date().getFullYear()
    if(yearNow-year<="17")
    {
        return "invalid date"
    }
    return "OK"

}