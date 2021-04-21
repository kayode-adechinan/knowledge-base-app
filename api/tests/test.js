const sum = require("../modules/sum");

const app = require("../app");

app.listen(3002);

const supertest = require("supertest");
const request = supertest(app);

afterAll(done => {
  done();
});

describe("GET /categories", () => {
  it("should return all categories with for each total or articles", async () => {
    const response = await request.get("/api/v1/categories");
    expect(response.status).toBe(200);
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe("GET /categories/1", () => {
  it("should return detail of category", async () => {
    const response = await request.get("/api/v1/categories/1");
    expect(response.status).toBe(200);
    expect(response.body.categoryName).not.toBeUndefined();
  });
});

describe("GET /articles/?categoryId=1", () => {
  it("should return all articles for a given category", async () => {
    const response = await request.get("/api/v1/articles/?categoryId=1");
    expect(response.status).toBe(200);
    expect(response.body.rows.length).toBeGreaterThan(0);
  });
});

describe("GET /articles/1", () => {
  it("should return detail of article", async () => {
    const response = await request.get("/api/v1/articles/1");
    expect(response.status).toBe(200);
    expect(response.body.title).not.toBeUndefined();
  });
});

describe("GET /search", () => {
  it("should return result search", async () => {
    const response = await request.get("/api/v1/search?searchTerm=joke");
    expect(response.status).toBe(200);
    expect(response.body.articles).not.toBeUndefined();
    expect(response.body.categories).not.toBeUndefined();
  });
});
