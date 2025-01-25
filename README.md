# Playwright-JS
# Form Submission Test Suite

This is an automated test suite using Playwright to verify form submission functionality on the DemoQA practice form.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- A modern web browser (Chrome, Firefox, or Safari)

## Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

## Project Structure
├── tests/ │ └── submitFormTest.test.js # Test file containing form submission tests ├── POM/ │ └── FormPage.js # Page Object Model for form interactions └── README.md

Running Tests

To run the tests:
npx playwright test

To run tests in headed mode (with browser visible):
npx playwright test --headed

To run tests in debug mode:
npx playwright test --debug

Dependencies

@playwright/test: For browser automation and testing
Additional dependencies can be found in package.json

Notes

The test targets the URL: https://demoqa.com/automation-practice-form
Make sure you have a stable internet connection when running the tests.
The Page Object Model (FormPage.js) needs to be properly implemented with all required method