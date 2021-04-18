import express from "express";
import {cluster} from "../couchbase";
const router = express.Router();

/**
 * Search endpoint
 * Allow user to search by article title, article body or category title
 */

router.get("/search", async (req, res) => {
  let {searchTerm, page = 1} = req.query;

  // http://localhost:3000/api/v1/search?searchTerm=joke

  let getArticlesQuery = `SELECT title,body FROM  demo._default.articles
                                  WHERE title LIKE "${searchTerm}%" OR body LIKE "${searchTerm}%";`;
  let getCategoryQuery = `SELECT title FROM  demo._default.categories
                                  WHERE title LIKE "${searchTerm}%";`;
  const getArticlesQueryResult = await cluster.query(getArticlesQuery);
  const getCategoryQueryResult = await cluster.query(getCategoryQuery);

  res.json({
    articles: getArticlesQueryResult.rows,
    categories: getCategoryQueryResult.rows,
  });
});

export default router;
