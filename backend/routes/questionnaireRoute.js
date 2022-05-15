const express = require('express');
const QuestionnaireRepository = require('../Repository/questionnaireRepository');
const router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//get all data
router.get("/get_all_files", async (req, res) => {
    let arr={"questions":[]};
    const questionnaireData = await QuestionnaireRepository.getAllFields();
    
    for (const [key, value] of Object.entries(questionnaireData)) {

        data = {questions:[{date:value.createDate,file:value.file,id:value.id,questionText:value.nameField,questionType:value.typeField,type:value.typeField,options:JSON.stringify(await QuestionnaireRepository.getOptionById(value.id)),open:true,required:value.required}]};
        arr.questions.push(data.questions[0]);
    }
        res.send(arr);

});


//get data by id
router.get("/data/:doc_id", async (req, res) => {
    var fileId = req.params.doc_id;
    let arr={"questions":[]};
    const questionnaireData = await QuestionnaireRepository.getFieldById(fileId);
  
    for (const [key, value] of Object.entries(questionnaireData)) {

        data = {questions:[{date:value.d,file:value.file,id:value.id,questionText:value.nameField,questionType:value.typeField,type:value.type,options:await QuestionnaireRepository.getOptionById(value.id),open:true,required:value.required}]};
        arr.questions.push(data.questions[0]);
    }
        res.send(arr);
})



//add new data
router.post(`/add_questions/:doc_id`, async (req, res) => {
    let q = 0;
    var docs_data = req.body.questions;
    var fileId = req.params.doc_id
    for (let i = 0; i < docs_data.length; i++) {
        let data = docs_data[i].options;

     await QuestionnaireRepository.addNewField(docs_data[i], fileId).then(result=>{
        q =result.insertId;
     })
     
    for (let j = 0; j < data.length; j++) { 
        if (data[j].option !== "") {

        await QuestionnaireRepository.addNewOption(data[j], q);
    }
}
}
    res.send(true);
})

//delete data by id
router.delete(`/delete_question/:doc_id`, async (req, res) => {
    var id = req.params.doc_id;
    if (id !== 'undefined') {
        await QuestionnaireRepository.deleteOptionCardById(id);

        await QuestionnaireRepository.deleteFieldById(id);
    }

})


//update data by id
router.put(`/update_questions/`, async (req, res) => {
    var docs_data = req.body.questions;
    for (let i = 0; i < docs_data.length; i++) {
        let data = docs_data[i].options;

        await QuestionnaireRepository.updateOptionById(data,docs_data[i].id );
    }
    
    await QuestionnaireRepository.updateFieldById( docs_data);

})


module.exports = router;