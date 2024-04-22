import { findByTestId } from "../util/getters";

export const flightSearchPage = {
    fareSelect: 'fare-type-id',
    fromField: 'from-id',
    toField: 'to-id',
    returnDateField: 'return-id',
    departDateField: 'depart-id',
    classSelectField: 'travel-id',
    passengerNumField: 'passengers-id',
    submitButton: 'submit-form-id'
}

Cypress.Commands.add("fillFlightDetails", (flightDetails) => {
    findByTestId(flightSearchPage.fareSelect).select('Return');
    findByTestId(flightSearchPage.fromField).type(flightDetails.source);
    findByTestId('0-suggestion-id').click();
    findByTestId(flightSearchPage.toField).type(flightDetails.to);
    findByTestId('0-suggestion-id').click();
    findByTestId(flightSearchPage.returnDateField).eq(1).type('2026-05-' + flightDetails.day);
    findByTestId(flightSearchPage.departDateField).click().type('2025-05-26');
    findByTestId(flightSearchPage.classSelectField).select(flightDetails.class);
    findByTestId(flightSearchPage.passengerNumField).select(flightDetails.passengers);
    findByTestId(flightSearchPage.submitButton).click();
    findByTestId('searching-spinner-id').scrollIntoView().should('be.visible');
    findByTestId('flight-success-id').scrollIntoView().should('be.visible');
});

Cypress.Commands.add("verifyDestinationMatchesDropdownCount", (destination: string, expectedCount: string) => {
    findByTestId(flightSearchPage.fromField).type(destination);
    findByTestId('auto-complete-id').find('div').should('have.length', expectedCount)
});