const { test, expect } = require('@playwright/test');
const FormPage = require('../POM/FormPage'); // Import the FormPage class

// Test data in JSON format
const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '1212121212'
};

// URL of the form
const formUrl = 'https://demoqa.com/automation-practice-form';

test('submit form and verify table is populated with data', async ({ page }) => {
  // Instantiate the FormPage class with the page and URL
  const formPage = new FormPage(page, formUrl);

  // Navigate to the form page
  await formPage.navigate();

  // Fill out the form with the provided data
  await formPage.fillForm(formData);

  // Submit the form
  await formPage.submitForm();

  // Wait for the table to be updated with the form submission data
  await formPage.waitForTableToUpdate();

  // Verify that the data is correctly populated in the table
  await formPage.verifyTableData(formData);
});
