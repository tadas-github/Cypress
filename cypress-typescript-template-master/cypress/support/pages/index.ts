import "./flight_main_page"

declare global {
    namespace Cypress {
        interface Chainable {
            fillFlightDetails(flightDetails): void
            verifyDestinationMatchesDropdownCount(destination: string, expectedCount: string): void
        }
    }
}