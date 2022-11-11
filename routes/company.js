var express = require('express');
var router = express.Router();
const companyController = require("../controllers/companyController");

router.route('/')
    .get((req, res) => {
        res.send('Get a random company')
    })
    .post((req, res) => {
        res.send('Add a company')
    })
    .put((req, res) => {
        res.send('Update the company')
    })

module.exports = router;