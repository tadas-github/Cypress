import { findByTestId } from "../util/getters";

export const authPage = {
    authField: "auth-code-id",
    submitButton: "submit-form-ids"
}

Cypress.Commands.add("signIn", (authCode: string) => {
    cy.url().should('be.equal', 'http://localhost:3000/');
    findByTestId(authPage.authField).type(authCode);
    findByTestId(authPage.submitButton).click();
});