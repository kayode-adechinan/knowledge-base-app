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
        FROM demo._default.articles a
        WHERE a.id
                IN (SELECT RAW article_id
                          FROM demo._default.categories_to_articles
                          WHERE category_id = "${id}");
    `;

  return await db.cluster.query(getCategoryArticlesQuery);
};

// fetch categories with total of articles
router.get("/categories", async (req, res) => {
  let getCategoryQuery = `SELECT id,title FROM  demo._default.categories  WHERE title != "";`;
  const getCategoryQueryResult = await db.cluster.query(getCategoryQuery);

  const categories = [];

  for (let i = 0; i < getCategoryQueryResult.rows.length; i++) {
    const category = getCategoryQueryResult.rows[i];

    // let getCategoryArticlesQuery = `
    //     SELECT a.id, a.title, a.body
    //     FROM demo._default.articles a
    //     WHERE a.id
    //             IN (SELECT RAW article_id
    //                       FROM demo._default.categories_to_articles
    //                       WHERE category_id = "${category.id}");
    // `;

    // let getCategoryArticlesQueryResult = await db.cluster.query(
    //   getCategoryArticlesQuery,
    // );

    let getCategoryArticlesQueryResult = await getCategoryArticlesQuery(
      category.id,
    );

    categories.push({
      categoryId: category.id,
      categoryName: category.title,
      totalOfArticle: getCategoryArticlesQueryResult.rows.length,
    });
  }

  res.json({
    data: categories,
  });
});

// category detail
router.get("/categories/:id", async (req, res) => {
  const {id} = req.params;
  let getCategoryDetailQuery = `SELECT * FROM  demo._default.categories  WHERE id = "${id}" LIMIT 1;`;
  const getCategoryDetailQueryResult = await db.cluster.query(
    getCategoryDetailQuery,
  );

  // let getCategoryArticlesQuery = `
  //       SELECT a.id, a.title, a.body
  //       FROM demo._default.articles a
  //       WHERE a.id
  //               IN (SELECT RAW article_id
  //                         FROM demo._default.categories_to_articles
  //                         WHERE category_id = "${id}");
  //   `;

  // let getCategoryArticlesQueryResult = await db.cluster.query(
  //   getCategoryArticlesQuery,
  // );

  let getCategoryArticlesQueryResult = await getCategoryArticlesQuery(id);

  let cleanedResponse = {};

  cleanedResponse.categoryName =
    getCategoryDetailQueryResult.rows[0].categories.title;
  cleanedResponse.totalOfArticle = getCategoryArticlesQueryResult.rows.length;

  //res.json(getCategoryDetailQueryResult.rows[0].categories);

  res.json(cleanedResponse);
});

module.exports = router;
