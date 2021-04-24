const express = require("express");
const db = require("../../couchbase");
const router = express.Router();

/**
 * Article endpoints
 */

// fetch articles by categories
router.get("/articles", async (req, res) => {
  //api/v1/articles?categoryId=3
  let {categoryId, page = 1} = req.query;

  let getArticleQuery = `

  SELECT a.id, a.title, a.body,a.updated_at
  FROM faqdb._default.articles a
  WHERE a.id
          IN (SELECT RAW article_id
                    FROM faqdb._default.categories_to_articles
                    WHERE category_id = "${categoryId}");
  `;

  const getArticleQueryResult = await db.cluster.query(getArticleQuery);
  res.json(getArticleQueryResult);
});

// fetch article detail
router.get("/articles/:id", async (req, res) => {
  //api/v1/articles/1
  const {id} = req.params;
  let getArticleQuery = `SELECT id,title,body FROM  faqdb._default.articles  WHERE id = "${id}" LIMIT 1;`;
  const getArticleQueryResult = await db.cluster.query(getArticleQuery);
  res.json(getArticleQueryResult.rows[0]);
});

module.exports = router;
