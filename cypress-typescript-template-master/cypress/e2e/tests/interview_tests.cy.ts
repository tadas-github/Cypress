import { flightDetails } from '../data/test_flight_details';
describe('Interview Tests', () => {
  beforeEach(() => {
    cy.visit('/travel/home/public/en_gb/');
    cy.url().should('be.equal', 'https://www.britishairways.com/travel/home/public/en_gb/');
    cy.get("button[id='ensCloseBanner']").click();
  });

  // Task 1 - Make the test pass (Fix a code error)
  it('should be able to fill out flight details and view schedule', () => {
    cy.fillFlightDetails(flightDetails);
  });

  // Task 2 - Update code to pass the test for all destinations
  it('should be able to view a list of destinations for each keyword', () => {
    const destinationPairs = [['London', '6'], ['Madrid', '1'], ['New York', '3'], ['Italy', '12'], ['France', '7']];
     
    destinationPairs.forEach((pair) => {
      cy.verifyDestinationMatchesDropdownCount(pair[0], pair[1]);
    })
  });  
});

 // Taks 3 - Using devices.ts update existing tests to run on multiple viewports
