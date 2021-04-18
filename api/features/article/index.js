import {Request, Response} from "express";
import express from "express";
import {cluster} from "../../couchbase";
const router = express.Router();

/**
 * Article endpoints
 */

// fetch articles by categories
router.get("/articles", async (req, res) => {
  //http://localhost:3000/api/v1/articles?categoryId=3
  let {categoryId, page = 1} = req.query;

  let getArticleQuery = `

  SELECT a.title, a.body
  FROM demo._default.articles a
  WHERE a.id
          IN (SELECT RAW article_id
                    FROM demo._default.categories_to_articles
                    WHERE category_id = "${categoryId}");


  `;

  const getArticleQueryResult = await cluster.query(getArticleQuery);
  res.json(getArticleQueryResult);
});

// fetch article detail
router.get("/articles/:id", async (req, res) => {
  const {id} = req.params;
  let getArticleQuery = `SELECT title,body FROM  demo._default.articles  WHERE id = "${id}" LIMIT 1;`;
  const getArticleQueryResult = await cluster.query(getArticleQuery);
  res.json(getArticleQueryResult.rows[0]);
});

export default router;
