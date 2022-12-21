describe("The Home Page", () => {
  it("should test profile details", () => {
    cy.visit("/")

    // Check for profile image
    cy.get("[data-test=section-profile]").find("img").should("be.visible")

    // Check for profile title
    cy.get("[data-test=section-profile]").find("h1").should("be.visible")

    // Check for profile text
    cy.get("[data-test=section-profile]").find("p").should("be.visible")
  })

  it("should test section header and all project links", () => {
    // Check for a valid header
    cy.get("[data-test=projects-section]").find("h2").should("be.visible")

    // Check if all projects links are working
    cy.get("[data-test=projects-section]")
      .find("a")
      .each((item) => {
        cy.request(item.prop("href"))
      })
  })

  // Check is all images are working
  it("should have a valid image for a project card", () => {
    cy.get("[data-test=projects-section]")
      .find("img")
      .each((item, index, list) => {
        expect(list).to.have.length(10)
        cy.wrap(item).should("be.visible")
      })
  })

  // Check is all links are working
  it("should have all social media links except linkedin and email", () => {
    cy.get("[data-test=social-media-list]").children().should("have.length", 6)
    cy.get("[data-test=social-media-list]")
      .find("a")
      .each((item) => {
        // LinkedIn blocks the request therefore this exception is needed
        // Email link doesn't work on cy.request
        if (
          item.attr("aria-label") === "LinkedIn" ||
          item.attr("aria-label") === "Email"
        )
          return

        cy.request(item.prop("href"))
      })
  })
})
