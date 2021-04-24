describe("Main pages", () => {
  it("Home page exists", () => {
    cy.visit("/");
    cy.get("#main-page")
      .its("length")
      .should("eq", 1);
  });

  it("Category detail page exists", () => {
    cy.visit("/categories/1");
    cy.get("#category-detail-page")
      .its("length")
      .should("eq", 1);
  });

  it("Article detail page exists", () => {
    cy.visit("/articles/1");
    cy.get("#article-detail-page")
      .its("length")
      .should("eq", 1);
  });

  it("Search page exists", () => {
    cy.visit("/search");
    cy.get("#search-page")
      .its("length")
      .should("eq", 1);
  });
});
