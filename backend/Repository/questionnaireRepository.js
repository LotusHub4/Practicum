const connect = require('../DB/dbconfig');


function getAllFields() {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun()
        const fields = pool.query(`SELECT *
        FROM questionnairfields`, (err, rows) => {
            if (!err) {
                pool.release()
            } else {
                console.log(err)
                pool.release()
                reject(err);
            }

            resolve(rows)

        })
    })
}

exports.getAllFields = getAllFields;


function getOptionById(id) {
    // const questions = {questionnaire:{},options:[]};
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();

        pool.query(`SELECT id,option
           FROM optiontype where idQuestionnaire=${id} ;`, (err, rows) => {
            if (!err) {
                pool.release();
            }
            else {
                console.log(err);
                pool.release();
                reject(err);
            }
            resolve(rows);

        });

    });
}
exports.getOptionById = getOptionById



function addNewField(req, id) {
    let newField = req.questions;
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for (let i = 0; i < newField.length; i++) {
            var d = new Date();

            pool.query(`INSERT INTO questionnairfields (file,nameField,typeField,type,createDate,required) VALUES('${id}','${newField[i].questionText}', '${newField[i].questionType}','${newField[i].type}','${d}', ${newField[i].required})`, (err, rows) => {
                if (!err) {
                    resolve('your insert data is succesfull')
                    pool.release()
                } else {
                    console.log(err);
                    pool.release()
                    reject(err);
                }
            })

        }
    })
}
exports.addNewField = addNewField;


function addNewOption(optArray, id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        console.log("hhhh " + optArray);
        for (let i = 0; i < optArray.length; i++) {

            pool.query(`INSERT INTO optiontype (option,idQuestionnaire) VALUES ('${optArray[i].option}', (SELECT id from questionnairfields WHERE file='${id}'));`), (err, rows) => {
                if (!err) {

                    resolve('your insert data is succesfull')
                    pool.release()
                } else {


                    console.log(err);
                    pool.release()
                    reject(err);
                }
            }
        }
    })
}
exports.addNewOption = addNewOption;


function deleteFieldById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`DELETE FROM questionnairfields WHERE id=${id}`, (err, rows) => {
            if (!err) {
                console.log('The data from questtionaire table are: \n', rows);
                resolve('Delete data is succesfull')
                pool.release()
            } else {
                console.log(err);
                pool.release()
                reject(err);
            }
        })

    })
}
exports.deleteFieldById = deleteFieldById;

function deleteOptionById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        pool.query(`DELETE FROM optiontype WHERE idQuestionnaire=${id}`, (err, rows) => {
            if (!err) {
                console.log('The data from optiontype table are: \n', rows);
                resolve('Delete data is succesfull')
                pool.release()
            } else {
                console.log(err);
                pool.release()
                reject(err);
            }
        })

    })
}
exports.deleteOptionById = deleteOptionById;



function updateFieldById(id, req) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for (let i = 0; i < req.length; i++) {
            pool.query(`UPDATE questionnairfields
            SET nameField = '${req[i].questionText}', typeField = '${req[i].type}',required = ${req[i].required}
            WHERE id=${id};`, (err, rows) => {
                if (!err) {
                    console.log('The data from questtionNaire table are: \n', rows);
                    resolve('Delete data is succesfull')
                    pool.release()
                } else {
                    console.log(err);
                    pool.release()
                    reject(err);
                }
            })

        }

    })
}
exports.updateFieldById = updateFieldById;

function updateOptionById(id,req) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for (let i = 0; i < req.length; i++) {

            if(req[i].id !== undefined)
            {

            pool.query(`UPDATE optiontype
            SET option='${req[i].option}'
            WHERE id=${req[i].id};`, (err, rows) => {
                if (!err) {
                    console.log('The data from optiontype table are: \n', rows);
                    resolve('Update data is succesfull')
                    pool.release()
                } else {
                    console.log(err);
                    pool.release()
                    reject(err);
                }
            })
        }else{
            console.log("ttt"  + req[i].option);

            pool.query(`INSERT INTO optiontype (option,idQuestionnaire) VALUES ('${req[i].option}',${id})`), (err, rows) => {
                if (!err) {

                    resolve('your insert data is succesfull')
                    pool.release()
                } else {


                    console.log(err);
                    pool.release()
                    reject(err);
                }
            }
        }
        }


    })
}
exports.updateOptionById = updateOptionById;
