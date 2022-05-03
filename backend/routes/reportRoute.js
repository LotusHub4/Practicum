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


module.exports = router;