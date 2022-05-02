const router = require("express").Router();
const Fields = require("../DB/formFields").fields;
const Candidates = require("../DB/candidates").candidates;

//get form fields
router.get("/allFields" , async(req,res)=>{
    res.json(Fields);
})
//add new candidate

module.exports = router;