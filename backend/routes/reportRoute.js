const express = require('express');
const router = express.Router();
const reportRepository = require('../Repository/reportRepository');
const app = express();

router.get("/", async (req, res) => {
    try {
        const x = await reportRepository.getAllCandidates();
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});

router.get("/:value", async (req, res) => {
    try {
        const x = await reportRepository.getCandidatesValue(req.params.value);
        console.log(req.params.value);
        res.send(x);
    } catch (e) {
        console.log(e);
    }
});
//===================================================================================

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

module.exports = router;