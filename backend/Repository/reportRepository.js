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


function getCandidateById(id) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun();

        const results = y.query(`SELECT * FROM candidate WHERE id='${id}'`, (err, rows) => {
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

