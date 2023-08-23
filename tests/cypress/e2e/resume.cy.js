describe('Cloud Resume', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // it should return the visit count from #visit-count
  it("should return the visit count", () => {
    cy.get("#visit-count").then((content) => {
      var visitCount = parseInt(content[0].innerText.split(" ")[0]);
      console.log(visitCount)
      expect(visitCount).to.be.greaterThan(0);
    });
  });

})