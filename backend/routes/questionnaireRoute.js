const express = require('express');
const QuestionnaireRepository = require('../Repository/questionnaireRepository');
const router = express.Router();
const fs = require('fs');
const Excel = require('exceljs')
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});





//get data by id
router.get("/data/:doc_id", (req, res) => {
    var docId = req.params.doc_id;
    fs.readFile(`./files/${docId}.json`, (err, data) => {
        if (err) console.log(err);;
        // let ques_data = JSON.parse(data);
        res.send(data);
    });
})

const path = require('path');



//get all data
router.get("/get_all_files", async (req, res) => {
    // fs.readdir(`./files/`, (err, files) => {
    //     if (err) throw err;

    //     for (const file of files) {
    //         fs.unlink(path.join(__dirname, '../files', file), err => {
    //             if (err) throw err;
    //         });
    //     }
    // });
    const questionnaireData = await QuestionnaireRepository.getAllFields();
    for (const [key, value] of Object.entries(questionnaireData)) {

        data = `{"questions":[{"id":${value.id},"questionText":"${value.nameField}","questionType":"${value.typeField}","type":"${value.typeField}","options":${JSON.stringify(await QuestionnaireRepository.getOptionById(value.id))},"open":${true},"required":${value.required}}]}`;
        fs.writeFileSync(`./files/${value.file}.json`, data);
    }
    const directoryPath = path.join(__dirname, '../files');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        res.send(files);


    });
});



//add new data
router.post(`/add_questions/:doc_id`, async (req, res) => {

    console.log(req.body.questions);
    let fileData = req.body.questions;
    var docs_data = req.body;
    var fileId = req.params.doc_id
    let data = docs_data.questions[0].options;
    const questionnaireData = await QuestionnaireRepository.addNewField(docs_data, fileId);
    if (data[0].option !== "") {
       await QuestionnaireRepository.addNewOption(data, fileId);


    }

    res.send(questionnaireData);
})

//delete data by id
router.delete(`/delete_question/:doc_id`, async(req, res) => {
    var id = req.params.doc_id;
    await QuestionnaireRepository.deleteOptionById(id);

    await QuestionnaireRepository.deleteFieldById(id);

    //fs.unlinkSync(`./files/${name}.json`);
})


module.exports = router;