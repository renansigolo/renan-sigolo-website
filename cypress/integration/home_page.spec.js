describe("The Home Page", () => {
  it("should test profile details", () => {
    cy.visit("/");

    // Check for profile image
    cy.get("[data-test=section-profile]").find("img").should("be.visible");

    // Check for profile title
    cy.get("[data-test=section-profile]").find("h1").should("be.visible");

    // Check for profile text
    cy.get("[data-test=section-profile]").find("p").should("be.visible");
  });

  it("should have all social media links", () => {
    cy.get("[data-test=social-media-list]").within(() => {
      cy.root().children().should("have.length", 5);
    });
  });
});
