describe('Positive test suit', () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it.skip('Test3', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
})

describe('Negative test suit', () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test3', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
})

describe('Some test suit', () => {
  it('Test1', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test2', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test3', () => {
    cy.visit('https://example.cypress.io');
  })
  
  it('Test4', () => {
    cy.visit('https://example.cypress.io');
  })
  describe('Some another test suit', () => {
    it('Test1', () => {
      cy.visit('https://example.cypress.io');
    })
    
    it('Test2', () => {
      cy.visit('https://example.cypress.io');
    })
    
    it('Test3', () => {
      cy.visit('https://example.cypress.io');
    })
    
    it('Test4', () => {
      cy.visit('https://example.cypress.io');
    })
  })

})
