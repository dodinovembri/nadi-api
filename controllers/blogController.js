const { json } = require("body-parser");
const pool = require("../configs/connection");
const CompanyModel = require ("../models/companyModel");

const index = (request, response) => {
    const {company_id,language_code} = request.body;

    pool.query(CompanyModel.index,[company_id,language_code], (error, results) => {
        if (error) throw error;
        response.status(200).json(results.rows);
    })
};

module.exports = {
    index
};