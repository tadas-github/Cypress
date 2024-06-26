export function findByInput(identifier: String) {
    return cy.get("input[name='" + identifier + "']")
}

export function findByClass(identifier: String) {
    return cy.get("*[class='" + identifier + "']")
}

export function findByDiv(identifier: String) {
    return cy.get("div[id='" + identifier + "']")
}

export function findByButton(identifier: String) {
    return cy.get("button[" + identifier + "]")
}

export function findByRole(identifier: String) {
    return cy.get("input[role='" + identifier + "']")
}

export function findByTestId(identifier: String) {
    return cy.get("[data-testid='" + identifier + "']")
}