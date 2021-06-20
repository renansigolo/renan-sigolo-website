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

  it("should test section header and all project links", () => {
    // Check for a valid header
    cy.get("[data-test=projects-section]").find("h2").should("be.visible");

    // Check if all projects have a valid image
    // cy.get("[data-test=projects-section]")
    //   .find("img.rounded")
    //   .each((item) => {
    //     cy.wrap(item).should("have.attr", "src");
    //     cy.wrap(item).should("be.visible");
    //   });

    // Check if all projects links are working
    cy.get("[data-test=projects-section]")
      .find("a")
      .each((item) => {
        cy.request(item.prop("href"));
      });
  });

  it("should have all social media links except linkedin", () => {
    cy.get("[data-test=social-media-list]").children().should("have.length", 5);

    // Check is all links are working
    cy.get("[data-test=social-media-list]")
      .find("a")
      .each((item) => {
        // LinkedIn blocks the request therefore this exception is needed
        if (item.prop("href") !== "https://www.linkedin.com/in/renansigolo") {
          cy.request(item.prop("href"));
        }
      });
  });
});
