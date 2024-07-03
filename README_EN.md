# PetShop App
## Project Description

The PetShop App is a front-end application inspired by the initial screen of ChatGPT. It was developed to provide an animated initial screen for a pet shop. The application focuses on providing a visually pleasing and interactive interface, which can be integrated with a back-end application for full functionality.

## Features
### Text Animation

Displays dynamically animated texts to enhance user experience.

### Interface Components:

* Login and Register Buttons: Styled buttons for future authentication functionalities.
* Informational Links: List of links for terms of use and privacy policy, ready to be integrated with actual content.

### Reusable Components:

Uses reusable components such as buttons, titles, and link lists for easy maintenance and extension.

## Project Structure

src/components:
  - Button: Component for styled buttons.
  - Title: Component for displaying titles.
  - AnimatedText: Component for displaying animated text.
  - ListLinks: Component for displaying a list of links with separators.

src/pages:
  - Home: Home page that integrates all the mentioned components, forming the main screen of the application.

# Testing

Tests for the components and the home page were developed using Jest and React Testing Library to ensure correct functionality and interface reliability.

## How to Run
### Clone the repository:

`git clone https://github.com/seu-usuario/petshop-app.git`

### Enter the project directory:
`cd animated-home`

## Necessary Dependencies
### Production Dependencies
These are the dependencies needed for the application to run:

node: ^18.19.0
react: ^18.3.1
react-dom: ^18.3.1
react-scripts: ^3.0.1
styled-components: ^6.1.11
web-vitals: ^2.1.4

### Development and Testing Dependencies
These are the dependencies needed for development and testing:

@testing-library/jest-dom: ^5.17.0
@testing-library/react: ^13.4.0
@testing-library/user-event: ^13.5.0
mutationobserver-shim: ^0.3.7

## Install the dependencies:

`npm install`
`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event mutationobserver-shim`

### Steps to Install Node.js

* Download and Install Node.js:

Go to the [official Node.js site](https://nodejs.org/en) and download the recommended LTS version for most users.
Follow the installation instructions specific to your operating system (Windows, macOS, or Linux).

* Verify the Installation:

After installing Node.js, open the terminal (or Command Prompt on Windows) and verify the installed Node.js and npm versions with the following commands:

`node -v`
`npm -v`

You should see the installed version numbers, confirming a successful installation.

## Run the application:

`npm start`

### Running Tests

To run tests in the project, follow these steps:
1- Install Testing Dependencies: If you don't have the necessary dependencies, install them with:

`npm install --save-dev @testing-library/react @testing-library/jest-dom`
`npm install mutationobserver-shim`

2- Running the Tests:
Execute the command in the terminal:

`npm test`

This command will run all test files following the naming convention, such as *.test.js or *.spec.js.

# Contributions

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License.
