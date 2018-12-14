import { readlinkSync } from "fs";

describe('Add New', function(){
    it('Can add new item', function(){
        cy.visit('http://localhost:3000')
        cy.get('.new_todo').type('hello moto');
        //the submit button doesn't have a direct way to identify it with class or id
        //here are some potential (not all of them will work) ways to identify it
        // cy.get('button').first(); -- risky, if someone adds another button it could shift the order
        // cy.contains('Submit') -- if someone adds "Submit" somewhere else, it could select both of them
        // cy.get('button').contains('Submit')  // you can chain them
        cy.get('#submitBtn').click();
        cy.get('.todos').contains('hello moto').should('exist')
    })
    it('Can add new item 2', function(){
        cy.visit('http://localhost:3000')
        cy.get('.new_todo').type('create tinder for cats');
        cy.get('#submitBtn').click();
        cy.wait(500)        // just to stall it for half a second bit
        cy.get('.todos').contains('create tinder for cats').should('exist')
    })
})