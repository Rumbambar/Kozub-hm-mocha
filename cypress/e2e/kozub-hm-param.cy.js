describe("Multiple test", () => {
    
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })
    
    const testPassWord = (testData, expectedResult) =>
    function () {
        
        cy.get('#exampleInputPassword1').click().type(`${testData}`)
        cy.get('#exampleInputPassword1').should("contain.value", `${expectedResult}`)

    };

    
    it('Basic form', testPassWord('123K94b)0','123K94b)0'));
    it('Basic form', testPassWord('1721G0016','1721G0016'));
    it('Basic form', testPassWord('AABBG45','AABBG45'));
    
});


describe("Multiple test2", () => {
    
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
      })
    
    const testEmail = (testData, expectedResult) =>
    function () {
        
        cy.get('#exampleInputEmail1').click().type(`${testData}`)
        cy.get('#exampleInputEmail1').should("contain.value", `${expectedResult}`)

    };

    
    it('Basic form', testEmail('BOBA6643@GMAIL.com','boba6643@gmail.com'));
    it('Basic form', testEmail('MAXKOZUB@GMAIL.COM','maxkozub@gmail.com'));
    it('Basic form', testEmail('BUZOK@GMAIL.COM','buzok@gmail.com'))
         
});


