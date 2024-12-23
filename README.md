# XModal

A React-based web application that displays a user details form inside a modal window. The app includes validation checks for user input such as username, email, phone number, and date of birth. Users can open and close the modal as needed.

## Features
- **Modal Window**: The form to collect user information appears in a modal window.
- **Form Fields**:
  - Username
  - Email Address (Validated using a regular expression for correct format)
  - Phone Number (10-digit validation)
  - Date of Birth (Cannot be in the future)
- **Form Submission Validation**: Ensures all fields are filled out correctly before submitting.
- **Responsive Design**: The modal adjusts its size according to the screen width.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: Used for styling the modal and buttons.
- **State Management**: `useState` hook to manage form values and modal visibility.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/x-modal.git
   ```
2. Navigate to the project directory:
   ```
   cd x-modal 
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the app:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to use the app.

## How It Works

- Clicking the **Open Form** button opens a modal with a form for the user to fill out.
- Upon clicking **Submit**, the app checks for validation:
    - If the email is not valid, or the phone number is not a 10-digit number, or the date of birth is in the future, the user will be alerted.
    - If all fields are valid, the form is cleared.

## Screenshots

### Demo GIF: Page Load and Modal Opening

![XModal][on page load]

*The gif above shows the app on page load and the modal opening after clicking the "Open Form" button.*

### Demo GIF: Gmail Validation Check

![GmailValidation][gmail validation]

*This gif demonstrates the email validation for the Gmail format. It alerts the user if the email is invalid.*

### Demo GIF: Phone Number Validation

![PhoneValidation][phone number validation]

*This gif shows the phone number validation, alerting the user if the phone number is not 10 digits.*

### Demo GIF: Date of Birth Validation

![DOBValidation][dob validation]

*The gif demonstrates the validation for Date of Birth, ensuring that the date is in the past.*

### Demo GIF: Submission After All Validation

![SubmitValidation][on submission]

*The gif demonstrates the submission process after all fields are validated. It ensures the user submits their details only after completing all validations correctly.*

## Limitations
- Only performs validation client-side without backend integration.
- It lacks accessibility features for screen readers.
- Input fields do not have further validation beyond basic checks like email format, phone number length, and date validity.

## License
This project is licensed under the MIT License.




[on page load]: src/assets/screenshots/20241216-0620-43.4495100_1.gif
[gmail validation]: src/assets/screenshots/emailValidation.gif
[phone number validation]: src/assets/screenshots/phoneNumberValidation.gif
[dob validation]: src/assets/screenshots/dobValidation.gif
[on submission]: src/assets/screenshots/onSubmission.gif