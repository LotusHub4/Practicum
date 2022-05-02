require('dotenv').config();
const config = {
    user :process.env.DB_USER ,
    password :process.env.DB_PWD ,
    server : "localhost",
    database: process.env.DB_NAME ,
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000,
    
      },
    options:{
        encrypt: false,
        useUTC: true,
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 1401
}

module.exports = config;
