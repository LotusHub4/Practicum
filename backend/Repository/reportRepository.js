const connect = require('../DB/dbconfig')

function getAllCandidates() {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate`, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }

            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getAllCandidates = getAllCandidates;
//===============================================================
function getCandidatesValue(value) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate WHERE 
        firstName LIKE '%${value}%' 
        OR lastName  LIKE '%${value}%'  
        OR livingArea LIKE  '%${value}%'`, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getCandidatesValue = getCandidatesValue;
//=============================================================
function getCandidatesSortValue(value) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate 
         ORDER BY  ${value} `, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getCandidatesSortValue = getCandidatesSortValue;
// ============================================================
function getFilterOptions(value) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate WHERE 
        mathLevel =  '${value}'  
        OR livingArea = '${value}'`, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getFilterOptions = getFilterOptions;
//=============================================================
function getEnglishLevel(value) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate WHERE 
         englishLevel = '${value}' `, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getEnglishLevel = getEnglishLevel;
// ============================================================
function getCandidateById(id) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun();

        const results = y.query(`SELECT * FROM candidate WHERE id = '${id}'`, (err, rows) => {
            if (!err) {
                console.log("The data from user table are: \n", rows);
                y.release();
            }
            else {
                console.log(err);
                y.release();
                reject(err);
            }
            resolve(rows)
        });
    });
}
exports.getCandidateById = getCandidateById




//============
// ,lastName
//         ,maritalStatus
//         ,interest
//         ,mathLevel [ASC|DESC]
//         ,englishLevel [ASC|DESC]