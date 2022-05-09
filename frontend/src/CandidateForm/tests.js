function checkRange(min,max,number){
    return (number<=max&&number>=min)
}

function numOfDigits(number , numDig){
    let count= number.toString().length;
    return(count===numDig)

}
function checknumOfDigitsAndAllDigits(number , numDig){
    return  /^\d+$/.test(number) && numOfDigits(number,numDig);

}
function isAllDigits(number){
    return  /^\d+$/.test(number);
}
function checknumOfDigitsAndRange(number , numDig , min ,max){
    return (checkRange(min,max,number)&&numOfDigits(number,numDig));

}

function isAllLetters(str){
    let res=false;
    for (const char of str) {
        res=char.toLowerCase() !== char.toUpperCase();
        if(!res)
            return res;
    }
    return res;
}

function checkEmail(str){
    let flag1=false;
    for (const char of str) {
        let index=str.indexOf(char)
        if(char==='@'&&index!==0&&str[index+1]!=='.')
            flag1=true;
        if(flag1)
            return str.endsWith('.com')||str.endsWith('.co.il')
    }
    return false;
}

function checkImgEnds(str){
    return(str.endsWith('.jpg')||str.endsWith('.jpeg')||str.endsWith('.png'))
}
console.log( checknumOfDigitsAndRange(622,2,17,99));