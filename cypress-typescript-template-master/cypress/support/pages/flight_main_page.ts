import { findByButton, findByClass, findByDiv, findByInput } from "../util/getters";

export const flightSearchPage = {
    searchFields: 'searchEntry',
    dropDown: 'search-bar-dropdown',
    date: 'date h1 ng-binding',
    passengers: 'sb-Flight-pax-mix',
}

Cypress.Commands.add("fillFlightDetails", (flightDetails) => {
    findByInput(flightSearchPage.searchFields).eq(0).type(flightDetails.source);
    findByClass(flightSearchPage.dropDown).click();
    findByInput(flightSearchPage.searchFields).eq(1).type(flightDetails.to);
    findByClass(flightSearchPage.dropDown).click();
    findByClass(flightSearchPage.date).click();
    cy.get("span[data-bo-text='day.date.date()']").contains(flightDetails.day).click();
    findByDiv(flightSearchPage.passengers).click();
    findByButton("class='spinner-button increase'").eq(0).click();
    findByButton("data-ng-click='togglePaxMixPicker()'").click();
    cy.get("span[class='selection input-text-styling ng-binding']").should('contain.text', flightDetails.passengers +' Adults')
});

Cypress.Commands.add("verifyDestinationMatchesDropdownCount", (destination: string, expectedCount: string) => {
    findByInput(flightSearchPage.searchFields).eq(0).type(destination);
    cy.get("ul[data-ng-show='showSuggestions()']").find('li').should('have.length', expectedCount)
});