import "./flight_main_page";
import "./auth_page";

declare global {
    namespace Cypress {
        interface Chainable {
            fillFlightDetails(flightDetails: any): void
            verifyDestinationMatchesDropdownCount(destination: string, expectedCount: string): void
            signIn(authCode: string): void
        }
    }
}