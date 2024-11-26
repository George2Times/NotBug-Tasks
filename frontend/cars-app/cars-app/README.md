# CarsApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.1.

## Table of Contents
- [Development Server](#development-server)
- [Functionalities](#functionalities)
- [How to Use](#how-to-use)
- [Code Scaffolding](#code-scaffolding)
- [Building](#building)
- [Running Unit Tests](#running-unit-tests)
- [Running End-to-End Tests](#running-end-to-end-tests)
- [Known Issues / TODOs](#known-issues--todos)
- [Additional Resources](#additional-resources)

## Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Functionalities
- **List of Cars**: Displays a list of cars with information about the number of services assigned to each car.
- **Add New Car**: Ability to add new cars to the list.
- **Edit Car Details**: Update car details including model and name.
- **View Car Details**: View car-specific details, including its assigned services.
- **Manage Services**: Add, edit, and delete services assigned to a specific car.
- **Delete Car**: Remove a car from the list.

## How to Use
1. **Start the Server**: Run `ng serve` and open your browser at `http://localhost:4200/`.
2. **Add New Car**: Click the "Add New Car" button on the car list page, fill out the form, and save.
3. **Edit Car or Manage Services**: Click "See Details" next to a car to view/edit the details and manage the services assigned to that car.
4. **Delete Car**: From the car details page, click "Delete Car" to remove it.

## Code Scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running Unit Tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running End-to-End Tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

### Running Cypress Tests

Step A: Open Cypress Test Runner
```bash
npx cypress open
```

Step B: Run Cypress Tests in the CLI (Optional)
```bash
npx cypress run
```

## Known Issues / TODOs

- **Unit Tests**:
  - Some unit tests (`.spec.ts`) are not currently passing due to issues with type assignments and `Observable` handling. These need updates to properly handle subscription.

- **End-to-End Tests**:
  - Cypress e2e tests for adding and managing car services need improvement to ensure all steps are correctly validated.
  - Some tests fail to assert the expected values after actions are performed, possibly due to timing issues or asynchronous behavior.
  - Add appropriate delays or wait conditions to Cypress tests to ensure elements are properly loaded before assertions.

- **Functional Improvements**:
  - Improve the UI/UX for adding and editing car services to make it more intuitive.
  - Add better error handling for cases like invalid data or network issues.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

