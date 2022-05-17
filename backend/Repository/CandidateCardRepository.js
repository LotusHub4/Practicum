const connect = require('../DB/dbconfig')

// function getAllCandidates() {
//     return new Promise(async (resolve, reject) => {
//         let y = await connect.connectionfun()
//         const candidate = y.query(`SELECT * FROM candidate`, (err, rows) => {
//             if (!err) {
//                 console.log('The data from candidates table are: \n', rows)
//                 y.release()
//             } else {
//                 console.log(err)
//                 y.release()
//                 reject(err);
//             }

//             resolve(rows)
//             console.log(rows, "the data appear");

//         })
//     })
// }

// exports.getAllCandidates = getAllCandidates;


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



async function updateCandidate(id, userinfo) {

    try {
        let y = await connect.connectionfun();
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(userinfo);
        console.log(id);

        // let keyValueArr = "";
        // for (let i = 0; i < userinfo.length; i++) {
        //     if (i != userinfo.length - 1) {
        //         keyValueArr = "'${" + userinfo[i].name + "}'='${" + userinfo[i].value + "}',"
        //     }
        //     else {
        //         keyValueArr = "'${" + userinfo[i].name + "}'='${" + userinfo[i].value + "}'"
        //     }

        // }
        y.query(`UPDATE candidate SET '${keyValueArr}' WHERE id='${id}'`,
            (err, rows) => {
                if (!err) {
                    console.log('The data from jopposts table are3: \n', rows);
                } else {
                    console.log(err), "2";
                    y.release()
                    reject(err);
                }
            })
        // const result = y.query(`UPDATE  candidate
        //                              SET '${keyValueArr}' 
        //                             WHERE id='${id}'
        // `);
        // console.log(result.rowsAffected[0]);
        return true;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

exports.updateCandidate = updateCandidate;

