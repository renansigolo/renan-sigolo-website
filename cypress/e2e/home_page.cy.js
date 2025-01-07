describe("The Home Page", () => {
  it("should test profile details", () => {
    const page = cy.visit("/");

    page.get("[data-test=section-profile]").find("img").should("be.visible");
    page
      .get("[data-test=section-profile]")
      .find("h1")
      .should("have.text", "Renan Sigolo");
    page.get("[data-test=section-profile]").find("p").should("be.visible");
  });

  // Check is all images are working
  it("should have a valid image for a project card", () => {
    cy.get("[data-test=projects-section]")
      .find("img")
      .each((item, _index, list) => {
        expect(list.length % 2).to.equal(0);
        cy.wrap(item).should("be.visible");
      });
  });

  it("should test section header and all project links", () => {
    // Check for a valid header
    cy.get("[data-test=projects-section]").find("h2").should("be.visible");

    // Check if all projects links are working
    cy.get("[data-test=projects-section]")
      .find("a")
      .each((item) => {
        cy.request(item.prop("href"));
      });
  });

  // Check is all links are working
  it("should have all social media links except linkedin and email", () => {
    cy.get("[data-test=social-media-list]").children().should("have.length", 6);
    cy.get("[data-test=social-media-list]")
      .find("a")
      .each((item) => {
        // LinkedIn blocks the request therefore this exception is needed
        // Email link doesn't work on cy.request
        if (
          item.attr("aria-label") === "LinkedIn" ||
          item.attr("aria-label") === "Email"
        )
          return;

        cy.request(item.prop("href"));
      });
  });
});
