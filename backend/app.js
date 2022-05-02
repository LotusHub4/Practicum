var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());




//=======================================
let port = process.env.PORT || 5555;
let host = "localhost";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);

});
