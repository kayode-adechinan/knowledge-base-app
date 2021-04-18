import {bucket, cluster} from "./couchbase";

const seed = async () => {
  const categories = [
    {
      id: "1",
      title: "joke",
    },
    {
      id: "2",
      title: "quote",
    },
    {
      id: "3",
      title: "thought",
    },
  ];

  const articles = [
    {
      id: "1",
      title: "first article",
      body: "first article body",
    },
    {
      id: "2",
      title: "second article",
      body: "second article body",
    },
    {
      id: "3",
      title: "third article",
      body: "third article body",
    },
  ];

  const categories_to_articles = [
    {
      id: "1",
      article_id: "1",
      category_id: "1",
    },

    {
      id: "2",
      article_id: "1",
      category_id: "2",
    },

    {
      id: "3",
      article_id: "1",
      category_id: "3",
    },

    {
      id: "4",
      article_id: "2",
      category_id: "1",
    },

    {
      id: "5",
      article_id: "2",
      category_id: "2",
    },

    {
      id: "6",
      article_id: "3",
      category_id: "3",
    },
  ];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    await bucket.collection("categories").insert(category.id, category);
  }

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    await bucket.collection("articles").insert(article.id, article);
  }

  for (let i = 0; i < categories_to_articles.length; i++) {
    const category_to_article = categories_to_articles[i];
    await bucket
      .collection("categories_to_articles")
      .insert(category_to_article.id, category_to_article);
  }

  // indexing

  const indexes = [
    `CREATE INDEX ix_category_id ON demo._default.categories(id);`,
    `CREATE INDEX ix_category_title ON demo._default.categories(title);`,

    `CREATE INDEX ix_article_id ON demo._default.articles(id);`,
    `CREATE INDEX ix_article_title ON demo._default.articles(title);`,
    `CREATE INDEX ix_article_body ON demo._default.articles(body);`,

    `CREATE INDEX ix_categories_to_articles_id ON demo._default.categories_to_articles(id);`,
    `CREATE INDEX ix_categories_to_articles_article_id ON demo._default.categories_to_articles(article_id);`,
    `CREATE INDEX ix_categories_to_articles_category_id ON demo._default.categories_to_articles(category_id);`,
  ];

  for (let i = 0; i < indexes.length; i++) {
    const qs = indexes[i];
    await cluster.query(qs);
  }

  console.log("done");
};

seed();
