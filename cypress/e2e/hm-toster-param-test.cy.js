/// <reference types="cypress"/>

describe('Parametrized toster test', () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[class="ng-tns-c141-19 ng-star-inserted"]').click();
        cy.get('[class="ng-tns-c141-23 ng-star-inserted"]').click();
    })
    
    // const testData: {
    //     position: 'top-right',
    //     title: 'test title',
    //     content: 'test content',
    //     time: '1000',
    //     type: 'primary'
    //     }

    // const  expectedResult: {
    //     icon: 'email',
    //     title: 'test title',
    //     content: 'test content',
    //     color: ' ... ',
    //     position: ...
    //     }

    it('Test1', () => {
        cy.get('[ng-reflect-selected="top-right"]').click()
        cy.get('[class="mat-ripple selected nb-transition ng-star-inserted"]').click()
      })
    
        
    
    // cy.get('.assertion-table tr td').eq(3).then( tableCell => {
    //     expect(tableCell).to.have.text('Column content');
    //     expect(tableCell).to.contain('Column content');
    //     expect(tableCell).to.contain(' content'); // пошук по частині тексту
    //     expect(tableCell).to.have.html('Column content');
        
    //     expect(tableCell.text()).to.include('Column content');
    //     expect(tableCell.text()).to.include(' content'); // пошук по частині тексту
    
    //     expect(tableCell).to.not.contain('qweqweqwe qweqew');
    //   })
    
   
  
})