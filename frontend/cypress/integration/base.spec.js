describe("Main pages", () => {
  it("Home page exists", () => {
    cy.visit("http://localhost:3000/");
    // cy.get("#new-task").type("Hello");
    // cy.get("button").click();
    // cy.get(".todo").contains("Hello");

    cy.get("#main-page")
      .its("length")
      .should("eq", 1);
  });

  it("Category detail page exists", () => {
    cy.visit("http://localhost:3000/categories/1");
    // cy.get("#new-task").type("Hello");
    // cy.get("button").click();
    // cy.get(".todo").contains("Hello");

    cy.get("#category-detail-page")
      .its("length")
      .should("eq", 1);
  });

  it("Article detail page exists", () => {
    cy.visit("http://localhost:3000/articles/1");
    // cy.get("#new-task").type("Hello");
    // cy.get("button").click();
    // cy.get(".todo").contains("Hello");

    cy.get("#article-detail-page")
      .its("length")
      .should("eq", 1);
  });

  it("Search page exists", () => {
    cy.visit("http://localhost:3000/search");
    // cy.get("#new-task").type("Hello");
    // cy.get("button").click();
    // cy.get(".todo").contains("Hello");

    cy.get("#search-page")
      .its("length")
      .should("eq", 1);
  });

  //   it("Clicking a todo cresses it out", () => {
  //     cy.get(".todo")
  //       .contains("Hello")
  //       .click();
  //     cy.get(".todo")
  //       .contains("Hello")
  //       .should("have.class", "completed");
  //   });

  //   it("Cross button deletes a todo", () => {
  //     cy.get(".delete-todo").click();
  //     cy.get(".todo").should("not.contain", "Hello");
  //   });
});
