const express = require("express");
const db = require("../../couchbase");
const router = express.Router();

/**
 * Category endpoints
 */

// shared service
const getCategoryArticlesQuery = async id => {
  let getCategoryArticlesQuery = `
        SELECT a.id, a.title, a.body
        FROM faqdb._default.articles a
        WHERE a.id
                IN (SELECT RAW article_id
                          FROM faqdb._default.categories_to_articles
                          WHERE category_id = "${id}");
    `;

  return await db.cluster.query(getCategoryArticlesQuery);
};

// fetch categories with total of articles
router.get("/categories", async (req, res) => {
  //api/v1/categories
  let getCategoryQuery = `SELECT id,title,icon FROM  faqdb._default.categories  WHERE title != "";`;
  const getCategoryQueryResult = await db.cluster.query(getCategoryQuery);

  const categories = [];

  for (let i = 0; i < getCategoryQueryResult.rows.length; i++) {
    const category = getCategoryQueryResult.rows[i];

    let getCategoryArticlesQueryResult = await getCategoryArticlesQuery(
      category.id,
    );

    categories.push({
      categoryId: category.id,
      categoryName: category.title,
      categoryIcon: category.icon,
      totalOfArticle: getCategoryArticlesQueryResult.rows.length,
    });
  }

  res.json({
    data: categories,
  });
});

// category detail
router.get("/categories/:id", async (req, res) => {
  //api/v1/categories/1
  const {id} = req.params;
  let getCategoryDetailQuery = `SELECT * FROM  faqdb._default.categories  WHERE id = "${id}" LIMIT 1;`;
  const getCategoryDetailQueryResult = await db.cluster.query(
    getCategoryDetailQuery,
  );

  let getCategoryArticlesQueryResult = await getCategoryArticlesQuery(id);

  let cleanedResponse = {};

  cleanedResponse.categoryName =
    getCategoryDetailQueryResult.rows[0].categories.title;
  cleanedResponse.categoryIcon =
    getCategoryDetailQueryResult.rows[0].categories.icon;
  cleanedResponse.totalOfArticle = getCategoryArticlesQueryResult.rows.length;

  res.json(cleanedResponse);
});

module.exports = router;
