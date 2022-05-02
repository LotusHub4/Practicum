//handle input field
function handleInput(field){
    let inputObj=
    {
        "name":"",
        "type":"input",
        "label":"",
        "funcName":"",
        "requierd":field.requierd,
        "properties":
            {
                "inputType":""
            }
    }
    return inputObj;
}

//handle select field
function handleSelect(field,selectOptions){
   let selectObj=
   {
        "name":"",
        "type":"select",
        "label":"",
        "funcName":"",
        "requierd":field.requierd,
        "properties":
        {
            "selectOptions":selectOptions,
            "multiple":true
        }
   } 
   return selectObj;
}

//handle textarea field
function handleTextarea(field){
    let textareaObj=
    {
        "name":"",
        "type":"textarea",
        "label":"",
        "funcName":"",
        "requierd":true,
        "properties":{}
    }
    return textareaObj;
}