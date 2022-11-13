const { json } = require("body-parser");
const pool = require("../configs/connection");

const getPageInformation = (request, response) => {

  const companyId = String(request.params.id);
  const languageCode = 'en';
  const slug = 'home';
  
  pool.query("SELECT public.nadi_get_blog_page_information($1, $2, $3)", [companyId, slug, languageCode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

const getPageContainer = (request, response) => {

  const companyId = String(request.params.id);
  const languageCode = 'en';
  
  pool.query("SELECT public.nadi_get_blog_page_container($1, $2)", [companyId, languageCode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  })
}

module.exports = {
  getPageInformation,
  getPageContainer
}