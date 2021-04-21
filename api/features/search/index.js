const express = require("express");
const db = require("../../couchbase");

const router = express.Router();

/**
 * Search endpoint
 * Allow user to search by article title, article body or category title
 */

router.get("/search", async (req, res) => {
  let {searchTerm} = req.query;

  // http://localhost:3000/api/v1/search?searchTerm=joke

  let getArticlesQuery = `SELECT id,title,body FROM  demo._default.articles
                                  WHERE title LIKE "${searchTerm}%" OR body LIKE "${searchTerm}%";`;
  let getCategoryQuery = `SELECT id,title FROM  demo._default.categories
                                  WHERE title LIKE "${searchTerm}%";`;
  const getArticlesQueryResult = await db.cluster.query(getArticlesQuery);
  const getCategoryQueryResult = await db.cluster.query(getCategoryQuery);

  res.json({
    articles: getArticlesQueryResult.rows,
    categories: getCategoryQueryResult.rows,
  });
});

module.exports = router;
