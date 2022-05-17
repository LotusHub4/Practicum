const express = require('express');
const router = express.Router();
const myRepository = require('../Repository/Functions');
const app = express();


router.post("/AddOne", async (req, res) => {
    try {
        const x = await myRepository.AddNewUser(req.body);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

router.get("/getAll", async (req, res) => {
    try {
        const x = await myRepository.getAllusers();
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});

router.delete("/:Email", async (req, res) => {
    try {
        console.log("hhhhhhhhhhhhhh", req.params.Email);
        const x = await myRepository.deletAccountByEmail(req.params.Email);
        res.send(x);
    } catch (e) {
        console.log(e);

    }
});


module.exports = router;