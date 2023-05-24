/// <reference types="cypress"/>

describe('Parametrized toster test', () => {

    before(() => {
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
                timeout: '5000'
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
                timeout: '5000'
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
                timeout: '5000'
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
                timeout: '5000'
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

            //cy.get('.size-medium.ng-valid.nb-transition.ng-dirty').invoke('text').then(parseFloat).should('be.an', '5000');;

            cy.get('.mat-ripple.appearance-filled').eq(0).click()
            
            
            
            
            cy.get('.icon-container.ng-star-inserted').eq(2).end(expectedResult.icon);;
            
            //cy.get('.title.subtitle').clear().type(expectedResult.title);
            //cy.get('.message').clear().type(expectedResult.content);

            //cy.get('.cdk-overlay-pane')
           // .should('have.css', 'background-color', 'rgb(96, 175, 32)')
            //cy.contains(expectedResult.color);
   
        });
         

    });

});