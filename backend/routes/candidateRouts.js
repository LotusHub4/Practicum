const router = require("express").Router();
const Fields = require("../DB/formFields").fields;
const helpFunctions = require('../controllers/formOptions');
const connectionhelper = require('../DB/dbconfig');

//get form fields
router.get("/allFields", async (req, res) => {
    res.json(Fields);
})

router.get("/fieldFromDB", async (req, res) => {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        //        y.query(`SELECT * FROM questionnairfields`, (err, rows) => {
        y.query(`SHOW COLUMNS FROM questionnairfields FROM practicum`, (err, rows) => {
            if (!err) {
                console.log('The data from jopposts table are: \n', rows)

                y.release()
                if (Object.keys(rows).length > 0) {
                    let allFields = []
                    //resolve(rows, true)
                    for (let i = 0; i < rows.length; i++) {
                        let field = {}
                        let name = helpFunctions.restoreName(rows[i].nameField);

                        switch (rows[i].type) {
                            // let x ="phone number"
                            // for (let i = 0; i < 1; i++) {
                            //     switch (x) {
                            case "phone number":
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "checknumOfDigitsAndAllDigits", rows[i].required, { inputType: "tel", numOfDigits: 8, pattern: "[0-9]*8" })
                                //console.log(field);
                                break;
                            case "postal code":
                                //input text
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "numOfDigits", rows[i].required, { inputType: "text", numOfDigits: 7 })

                                break;
                            case "grade":
                                //input text
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "checkRange", rows[i].required, { inputType: "text", min: 0, max: 100 })

                                break;
                            case "PO-Box":
                                //input text
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "isAllDigits", rows[i].required, { inputType: "text" })

                                break;
                            case "age":
                                //input text numOfDigits 2 min 17
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "checknumOfDigitsAndRange", rows[i].required, { inputType: "text", numOfDigits: 2, min: 17, max: 99 })

                                break;
                            case "id":
                                //input tel pattern [0-9]*9
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "numOfDigits", rows[i].required, { inputType: "tel", numOfDigits: 9, pattern: "[0-9]*9" })

                                break;
                            case "date":
                                //input date
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "isValidDate", rows[i].required, { inputType: "date" })

                                break;
                            case "time":
                                //input time
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "time" })

                                break;
                            case "units":
                                //input number
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "checkRange", rows[i].required, { inputType: "text", min: 0, max: 10 })

                                break;
                            case "text":
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "text" })

                                break;
                            case "paragraph":
                                //textarea
                                field = helpFunctions.handleField(name, "textarea", rows[i].nameField, "", rows[i].required, {})


                                break;
                            case "email":
                                //input email
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "checkEmail", rows[i].required, { inputType: "email" })

                                break;
                            case "select"://ask fatina about multipul select
                                let OptionsOfSelect = helpFunctions.getAllOptions(rows[i].id);
                                field = helpFunctions.handleField(name, "select", rows[i].nameField, "", rows[i].required, { selectOptions: OptionsOfSelect, multiple: false })
                                break;
                            case "checkbox":
                                //input checkbox
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "checkbox" })

                                break;
                            case "multi checkbox":
                                //multipul select
                                let OptionsOfcheckbox = helpFunctions.getAllOptions(rows[i].id);
                                field = helpFunctions.handleField(name, "select", rows[i].nameField, "", rows[i].required, { selectOptions: OptionsOfcheckbox, multiple: true })

                                break;
                            case "password":
                                //input password
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "password" })

                                break;
                            case "upload image":
                                //input file
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "file" })

                                break;
                            case "upload file":
                                //inpt file
                                field = helpFunctions.handleField(name, "input", rows[i].nameField, "", rows[i].required, { inputType: "file" })

                                break;

                            default:
                                break;
                        }
                        allFields.push(field);

                    }
                    res.send(allFields)
                }
                else {
                    resolve(false)
                }
            } else {
                console.log(err)
                y.release()
                reject(err);
            }

        })
    })
})


//add new candidate
router.post("/addCandidate", async (req, res) => {
    return new Promise(async (resolve, reject) => {
        let allFields = req.body.candidate;
        let keys = [], vals = []
        for (let i = 0; i < allFields.length; i++) {
            keys.push(allFields[i].name);
            vals.push(allFields[i].value);

        }
        console.log(keys, "----", vals);

        let y = await connectionhelper.connectionfun()
        //for (let i = 0; i < allFields.length; i++) {

        y.query('SHOW COLUMNS FROM candidate', (err, rows) => {
            if (!err) {
                //for (let i = 0; i < 3; i++) {
                let allColumns = []
                console.log('The data from jopposts table are1: \n');
                Object.values(rows).forEach(col => {
                    allColumns.push(col.Field)
                });
                for (let i = 0; i < allFields; i++) {
                    if (!allColumns.includes(keys[i])) {
                        y.query('ALTER TABLE candidate ADD COLUMN ' + keys[i] + ' VARCHAR(255) NOT NULL', (err, rows) => {
                            if (!err) {
                                console.log('The data from jopposts table are2: \n', rows)
                            } else {
                                console.log(err, "1")
                                y.release()
                                reject(err);
                            }
                        })
                    }
                }
                // for (let i = 0; i < 3; i++) {
                y.query('INSERT INTO candidate (??) VALUES (?)', [keys, vals], (err, rows) => {
                    if (!err) {
                        console.log('The data from jopposts table are3: \n', rows);
                    } else {
                        console.log(err), "2";
                        y.release()
                        reject(err);
                    }
                })

            } else {
                console.log(err);
                y.release()
                reject(err);
            }
            resolve(rows)
            res.send("done")
        })

    })
})
module.exports = router;