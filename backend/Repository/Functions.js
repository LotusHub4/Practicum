const connectionhelper = require('../DB/dbconfig')

function AddNewUser(req) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()

        y.query('INSERT INTO users (FirstName,LastName,Degree,Role,Location,PhoneNumber,User_id,Email,UserName,Password) VALUES(?,?,?,?,?,?,?,?,?,?)', [req.FirstName, req.LastName, req.Degree, req.Role, req.Location, req.PhoneNumber, req.User_id, req.Email, req.UserName, req.Password], (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                y.release()
            } else {
                console.log(err);
                y.release()
                reject(err);
            }
        })
    })
}
exports.AddNewUser = AddNewUser
//---------------------------------------------------------------------------------------------------------
function getAllusers() {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`SELECT * FROM users `, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows)
                resolve(rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }
        })
    })
}
exports.getAllusers = getAllusers;
//---------------------------------------------------------------------------------------------------------

function deletAccountByEmail(Email) {
    return new Promise(async (resolve, reject) => {
        let y = await connectionhelper.connectionfun()
        y.query(`DELETE FROM users WHERE Email = '${Email}'`, (err, rows) => {
            if (!err) {
                console.log('The data from users table are: \n', rows);
                resolve(true)
            } else {
                console.log(err);

                reject(err);
            }
        })
    })
}
exports.deletAccountByEmail = deletAccountByEmail
