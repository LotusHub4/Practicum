const connect = require('../DB/dbconfig');


function getAllFields() {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun()
        const fields = pool.query(`SELECT file ,id,nameField,typeField,createDate,required,type  FROM questionnairfields `, (err, rows) => {
            if (!err) {
                resolve(rows)
            } else {
                console.log(err)
                reject(err);
            }
        })
        pool.release()
    })
}

exports.getAllFields = getAllFields;
//const fields = pool.query(`SELECT file ,id,nameField,typeField,createDate,required,type , COUNT(*) FROM questionnairfields GROUP BY file HAVING COUNT(*) > 1`, (err, rows) => {


function getOptionById(id) {
    // const questions = {questionnaire:{},options:[]};
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();

        pool.query(`SELECT id,option
           FROM optiontype where idQuestionnaire=${id} ;`, (err, rows) => {
            if (!err) {
                resolve(rows);
            }
            else {
                console.log(err);
                reject(err);
            }
        });
        pool.release()
    });
}
exports.getOptionById = getOptionById

function getFieldById(id) {
    // const questions = {questionnaire:{},options:[]};
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();

        pool.query(`SELECT *
           FROM questionnairfields where file='${id}';`, (err, rows) => {
            if (!err) {
                resolve(rows);
            }
            else {
                console.log(err);
                reject(err);
            }
        });
        pool.release()
    });
}
exports.getFieldById = getFieldById


function addNewField(req, id) {

    let newField = req;
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();

        var d = new Date();
        pool.query('INSERT INTO questionnairfields (file,nameField,typeField,type,createDate,required) VALUES(?,?,?,?,?,?)', [id, newField.questionText, newField.questionType, newField.type, d, newField.required], (err, rows) => {
            if (!err) {
                pool.release()
                resolve(rows);
            } else {
                console.log(err);
                reject(err);
            }
        })
    })
}
exports.addNewField = addNewField;


function addNewOption(optArray, id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`INSERT INTO optiontype (option,idQuestionnaire) VALUES('${optArray.option}',${id})`, (err, rows) => {
            if (!err) {
                pool.release()
                resolve('your insert data is succesfull');
            }
            else {
                console.log(err);
                reject(err);
            }
        })
    })
}
exports.addNewOption = addNewOption;


function deleteFieldById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`DELETE FROM questionnairfields WHERE id=${id}`, (err, rows) => {
            if (!err) {
                console.log('The data from questtionaire table are: \n', rows);
                resolve('Delete data is succesfull');

            } else {
                console.log(err);
                reject(err);
            }
        })
        pool.release()

    })
}
exports.deleteFieldById = deleteFieldById;

function deleteOptionById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`DELETE FROM optiontype WHERE id=${id}`, (err, rows) => {
            if (!err) {
                resolve(rows);

            } else {
                console.log(err);
                reject(err);
            }
        })
        pool.release()

    })
}
exports.deleteOptionById = deleteOptionById;

function deleteOptionCardById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`DELETE FROM optiontype WHERE idQuestionnaire=${id}`, (err, rows) => {
            if (!err) {
                resolve(rows);

            } else {
                console.log(err);
                reject(err);
            }
        })
        pool.release()

    })
}
exports.deleteOptionCardById = deleteOptionCardById;



function updateFieldById(req) {
   
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for (let i = 0; i < req.length; i++) {
            console.log("iddd",req[i].id);
            if(req[i].id !== undefined){
           
                pool.query(`UPDATE questionnairfields
                SET nameField = '${req[i].questionText}', typeField='${req[i].questionType}' ,type = '${req[i].type}',required = ${req[i].required}
                WHERE id=${req[i].id};`, (err, rows) => {
                    if (!err) {
                       
                        resolve(rows);
                 
                    } else {
                        console.log(err);
                        reject(err);
                    }
                    pool.release();
                })

            }
            else{
                // console.log("iddd",req[i].id);
                console.log("filee",req[i].file);
                await addNewField(req[i],req[i].file);
                for (let j = 0; j < req[i].options.length; j++) {
                    if (req[i].options[j].option !== "") {
                    await addNewOption(req[i].options[j],req[i].file);
                    }
                }
            }
        }
    })
}
exports.updateFieldById = updateFieldById;


function updateOptionById(req,id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for (let i = 0; i < req.length; i++) {
            if (req[i].id !== undefined) {
                if (req[i].option != "") {
                    pool.query(`UPDATE optiontype
            SET option='${req[i].option}'
            WHERE id=${req[i].id};`, (err, rows) => {
                        if (!err) {
                            resolve(rows);

                        } else {
                            console.log(err);
                            reject(err);
                        }
                    })
                }
                else {
                    deleteOptionById(req[i].id);
                }
            } else {
                pool.query('INSERT INTO optiontype (option,idQuestionnaire) VALUES(?,?)', [req[i].option, id], (err, rows) => {
                    if (!err) {
                        resolve('your insert data is succesfull');
                    } else {
                        console.log(err);
                        reject(err);
                    }
                })
            }
        }
        pool.release();
    })
}
exports.updateOptionById = updateOptionById;


