/**
 *  Imports
 */
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

/**
 *  Routers import
 */
const category = require("./features/category");
const article = require("./features/article");
const search = require("./features/search");


/**
 *  App Instanciation
 */
const app = express();

/**
 *  App Configuration
 */

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({
    message: "FAQ REST API",
    endpoints: [
      "/search?searchTerm=x",
      "/categories",
      "/categories/:id",
      "articles/?categoryId=x",
      "articles/:id",
    ],
  });
});

app.use("/api/v1", category);
app.use("/api/v1", article);
app.use("/api/v1", search);

/**
 *  App Export
 */

module.exports = app;