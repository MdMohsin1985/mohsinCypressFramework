// This file is processed and loaded automatically before your test files.
// It's a great place to put global configuration and behavior that modifies Cypress.

// Import custom commands
import './commands';

// Example: run code before each test
beforeEach(() => {
  // You can add global setup here if needed
  cy.log('Starting a new test...');
});
