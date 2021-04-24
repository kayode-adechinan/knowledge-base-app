const express = require("express");
const db = require("../../couchbase");

const router = express.Router();

/**
 * Search endpoint
 * Allow user to search by article title, article body or category title
 */

router.get("/search", async (req, res) => {
  //search?searchTerm=bon
  let {searchTerm} = req.query;

  let getArticlesQuery = `SELECT id,title,body FROM  faqdb._default.articles
                                  WHERE  lower(title) LIKE "%${searchTerm.toLocaleLowerCase()}%" OR lower(body) LIKE "%${searchTerm.toLocaleLowerCase()}%";`;
  let getCategoryQuery = `SELECT id,title FROM  faqdb._default.categories
                                  WHERE lower(title) LIKE "%${searchTerm.toLocaleLowerCase()}%";`;
  const getArticlesQueryResult = await db.cluster.query(getArticlesQuery);
  const getCategoryQueryResult = await db.cluster.query(getCategoryQuery);

  res.json({
    articles: getArticlesQueryResult.rows,
    categories: getCategoryQueryResult.rows,
  });
});

module.exports = router;
