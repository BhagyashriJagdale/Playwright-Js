// FormPage.js

class FormPage {
    constructor(page, url) {
      this.page = page;
      this.url = url;
    }
  
    // Navigate to the form URL
    async navigate() {
      await this.page.goto(this.url);
    }
  
    // Fill out the form using the provided data
    async fillForm(formData) {
      await this.page.fill('#firstName', formData.firstName); // First name field
      await this.page.fill('#lastName', formData.lastName); // Last name field
      await this.page.fill('#userEmail', formData.email); // Email field
      await this.page.fill('#userNumber', formData.phoneNumber); // Phone number field
      // Select gender (you can modify this based on your form structure)
      await this.page.click('label[for="gender-radio-1"]'); // Example: Male (first option)
    }
  
    // Submit the form
    async submitForm() {
      await this.page.click('//button[@id="submit" and text()="Submit"]'); // Submit button (XPath)
    }
  
    // Wait for the table to be updated after form submission
    async waitForTableToUpdate() {
      await this.page.waitForSelector('.table-responsive'); // Wait for table to be rendered/updated
    }
  
    // Verify that the form data is populated correctly in the table
    async verifyTableData(formData) {
      const nameText = await this.page.locator('.table-responsive tbody tr:nth-child(1) td:nth-child(2)').textContent();
      const emailText = await this.page.locator('.table-responsive tbody tr:nth-child(2) td:nth-child(2)').textContent();
  
      if (nameText.includes(formData.firstName) && emailText === formData.email) {
        console.log('Form submission verified!');
      } else {
        console.log('Form submission failed!');
      }
    }
  }
  
  module.exports = FormPage;
  