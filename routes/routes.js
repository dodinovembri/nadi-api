const { Router } = require ("express");
const CompanyController = require("../controllers/companyController")
const router = Router();

router.get('/company',CompanyController.index); 

module.exports = router;