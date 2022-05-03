var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));




app.use('/candidateForm', require('./routes/candidateRouts'));

//=========================
let port = process.env.PORT || 5555;
let host = "localhost";
app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);

});
