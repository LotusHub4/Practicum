const express = require('express');
const router = express.Router();
const reportRepository = require('../Repository/CandidateCardRepository');
const app = express();
const helpFunctions = require('../controllers/formOptions');
const connectionhelper = require('../DB/dbconfig');
const Fields = require("../DB/formFields").fields;

//get form fields
router.get("/allFields", async (req, res) => {
    res.json(Fields);
})

// get Candidate by id
router.get("/:id", async (req, res) => {
    try {
        const x = await reportRepository.getCandidateById(req.params.id);
        console.log(req.params.id);
        res.send(x);
        console.log(x);
    }
    catch (e) {
        console.log(e);
    }

});

// router.put("/upDate/:id", async (req, res) => {
//     console.log("this is req.body" + req.body);
//     // console.log(req.body.id + "idd");
//     const isAllOK = await reportRepository.updateCandidate(req.params.id, req.body);
//     console.log("inside /upDate/:id isAllOK= " + isAllOK);
//     if (isAllOK === true) {
//         res.send("successfully updated user");
//     }
//     else {
//         res.send("unsuccessful to update ");
//     }
// });
router.put("/updateCandidateInfo/:id", async (req, res) => {
    console.log("this is req.body" + req.body);
    console.log(req.params.id + "idd");
    const isAllOK = await reportRepository.updateCandidate(req.params.id, req.body);
    console.log("inside /upDate/:id isAllOK= " + isAllOK);
    if (isAllOK === true) {
        res.send("successfully updated user");
    }
    else {
        res.send("unsuccessful to update ");
    }
});


module.exports = router;