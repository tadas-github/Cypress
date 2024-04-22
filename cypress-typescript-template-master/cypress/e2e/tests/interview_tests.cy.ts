import { flightDetails } from '../data/test_flight_details';
describe('Interview Tests', () => {
  const AUTH_CODE = "";

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    cy.visit('/');
    cy.signIn(AUTH_CODE);
    cy.url().should('be.equal', 'http://localhost:3000/flight');
  });

  // Task 1 - Make the test pass (Fix a code error)
  it('should be able to fill out flight details and view schedule', () => {
    cy.fillFlightDetails(flightDetails);
  });

  // Task 2 - Update the code to pass the test for all destinations
  it('should be able to view a list of destinations for each keyword', () => {
    const destinationPairs = [['London', '5'], ['Madrid', '1'], ['New York', '1'], ['Italy', '3'], ['France', '2']];
     
    destinationPairs.forEach((pair) => {
      cy.verifyDestinationMatchesDropdownCount(pair[0], pair[1]);
    })
  });  
});

 // Taks 3 - Using devices.ts update existing tests to run on multiple viewports
