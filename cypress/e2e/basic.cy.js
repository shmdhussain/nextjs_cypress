describe('check page has', () => {
    beforeEach(()=>{
      cy.visit("/");
      cy.viewport(320,480)
    });
    it('hello world', () => {
      expect(true).to.equal(true)
      cy.contains("Hello World.")
    })


 })
