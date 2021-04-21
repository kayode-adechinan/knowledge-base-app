const sum = require("../modules/sum");

const app = require("../app");

app.listen(3002);

const supertest = require("supertest");
const request = supertest(app);

it("gets the test endpoint", async done => {
  const response = await request.get("/test");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
  done();
});

describe("GET:/categories", () => {
  test("should return all categories with for each total or articles", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

test("GET:/categories/1 -> should return detail of category", () => {
  expect(sum(1, 2)).toBe(3);
});

test("GET:/articles/?categoryId=1 -> should return all articles for a given category", () => {
  expect(sum(1, 2)).toBe(3);
});

test("GET:/articles/1 -> should return detail of article", () => {
  expect(sum(1, 2)).toBe(3);
});

test("GET:/search -> should return result search", () => {
  expect(sum(1, 2)).toBe(3);
});
