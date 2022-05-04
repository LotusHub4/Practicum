var express = require('express');
var app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }))




app.use('/candidates', require('../backend/routes/reportRoute'));



//=========================
let port = process.env.PORT || 5555;
let host = "localhost";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);

});
