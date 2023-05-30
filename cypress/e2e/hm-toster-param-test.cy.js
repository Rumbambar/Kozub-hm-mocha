/// <reference types="cypress"/>

describe('Parametrized toster test', () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click(); 
        cy.get('[title="Toastr"]').click();  
    })
    const tost = [
        {
            testData:
            {
                position: 'top-right',
                title: 'I\'m here',
                content: 'Success toster',
                type: 'success',
                
            },

            expectedResult:
            {
                icon: 'checkmark',
                title: 'I\'m here',
                content: 'Success toster',
                color: 'rgb(96, 175, 32)',
                position:
                {
                    'justify-content': 'flex-start', 
                    'align-items': 'flex-start'
                }
            },

        }, {
            testData:
            {
                position: 'top-left',
                title: 'Hi, Max!',
                content: 'Info toster',
                type: 'info',
                
            },

            expectedResult:
            {
                icon: 'question-mark',
                title: 'Hi, Max!',
                content: 'Info toster',
                color: 'rgb(4, 149, 238)',
                position:
                {
                    'justify-content': 'flex-start', 
                    'align-items': 'flex-start'
                }
            },

        },

        {
            testData:
            {
                position: 'bottom-left',
                title: 'Hi, Taisia!',
                content: 'Warning toster',
                type: 'warning',
                
            },

            expectedResult:
            {
                icon: 'alert-triangle',
                title: 'Hi, Anna!',
                content: 'Warning toster',
                color: 'rgb(255, 159, 5)',
                position:
                {
                    'justify-content': 'flex-start',
                    'align-items': 'flex-end'
                }
            },

        },

        {
            testData:
            {
                position: 'bottom-right',
                title: 'Hi, friend!',
                content: 'Danger toster',
                type: 'danger',
                
            },

            expectedResult:
            {
                icon: 'flash',
                title: 'Hi, friend!',
                content: 'Danger toster',
                color: 'rgb(176, 0, 32)',
                position:
                {
                    'justify-content': 'flex-end',
                    'align-items': 'flex-end'
                }
            },

        }

    ]

    tost.forEach(({ testData, expectedResult }) => {

        it(`${testData.content}`, () => {
            
            cy.get('.position-select .select-button').click();
            cy.contains(testData.position).click();

            cy.get('[name="title"]').clear().type(testData.title);
            cy.get('[name="content"]').clear().type(testData.content);

            cy.get('[ng-reflect-selected="primary"]').click();
            cy.contains(testData.type).click();

            cy.get('[ng-reflect-model="2000"]').should('have.value', 2000);

            cy.get('.mat-ripple.appearance-filled').eq(0).click()
            
            
            
            
            cy.get('.icon-container.ng-star-inserted').eq(2).end(expectedResult.icon);;
            
            cy.get('.subtitle').should('include.text', expectedResult.title);
            cy.get('.message').should('have.text', expectedResult.content);

            // cy.get('.ng-tns-c209-54.ng-star-inserted').eq(1)
            // .should('have.css', 'background-color') 
            // .and('rgb(233, 29, 99)')
            // cy.contains(expectedResult.color);

            cy.get('.toastr-overlay-container.cdk-global-overlay-wrapper').should('have.css', expectedResult.position )
            
        });
         

    });

});