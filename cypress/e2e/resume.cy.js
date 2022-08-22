describe("Resume Download", () => {
  it("should be directly available", () => {
    cy.request("/resume.pdf")
  })
})
