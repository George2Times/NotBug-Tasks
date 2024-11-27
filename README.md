# NotBug Recruitment Tasks

This repository contains both frontend and backend projects that serve as recruitment tasks for NotBug. These projects are built using Angular, Flask, and Django.

## Project Structure

- `frontend/` - Frontend applications developed with Angular.
- `backend/` - Backend applications built using Python (Flask and Django).

## Table of Contents

### Frontend
1. **[Angular App: Cars App](frontend/cars-app/)** - An application for managing a list of cars stored in localStorage.
2. **[RxJS: Average Age Calculation](frontend/cars-app/src/app/services/rxjs-age-calc.ts)** - A script that calculates the average age of people living in Poland using RxJS.
3. **[Angular App: Pokédex App](frontend/pokedex-app/)** - An application to display a list of Pokémon using data fetched from PokeAPI.

### Backend
4. **[Flask App: To-Do List](backend/flask-todo/)** - A REST API application for managing a to-do list (including CRUD operations).
5. **[Django App: Blog App](backend/django-blog/)** - A blogging platform with registration, creation, and editing of blog posts.
6. **[Python Script: Filter Polish Users](backend/flask-todo/utils/filter-polish-users.py)** - A script to generate a list of users from Poland using List Comprehension.
7. **[Python Script: Mathematical Operations](backend/flask-todo/utils/math-operations.py)** - A script that calculates the sum of list elements and populates a list with powers of 2.

## Installation and Running Instructions

### Frontend Applications
Navigate to the appropriate Angular application folder, such as `cars-app` or `pokedex-app`, and run:

```sh
npm install
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` to view the app.

### Backend Applications

#### Flask To-Do List Application
Navigate to the `flask-todo` folder:

```sh
pip install -r requirements.txt
python app.py
```

The server should start running locally. Open your browser at `http://localhost:5000/` to interact with the application.

#### Django Blog Application
Navigate to the `django-blog` folder:

```sh
pip install -r requirements.txt
python manage.py runserver
```

Once running, open your browser at `http://localhost:8000/` to access the blog platform.

## Features and Functionalities

### Cars App
- Create, view, and delete cars stored in localStorage.
- Update car information, including services related to each car.
- Unit tests written using Jasmine and end-to-end (e2e) tests using Cypress.

### Pokédex App
- Fetches a list of Pokémon using PokeAPI.
- Displays details of each Pokémon, including type, height, weight, abilities, and base stats.
- Shows Pokémon images/icons for better visualization.
- Written using Angular with HttpClient to handle API requests.

### To-Do List App
- REST API developed using Flask.
- Full CRUD support: create, retrieve, update, delete to-do items.

### Blog App
- Django-based blog application.
- User authentication and registration.
- Allows users to create, edit, and manage blog posts.

### Additional Python Scripts
- **Filter Polish Users**: Filters users from Poland using List Comprehension.
- **Mathematical Operations**: Performs mathematical operations such as summing list items and generating powers of two.

## Todo / Future Improvements
- **Cars App**: Improve UI for better user experience and add more advanced search functionalities.
- **Pokédex App**: Enhance search capabilities, add type-based filtering, and implement Pokémon comparison features.
- **Blog App**: Add commenting functionality and tags for blog posts.
- **Tests**: Enhance and refactor unit and e2e tests for all applications to cover more scenarios and edge cases.

## Running Tests

### Frontend
- **Unit Tests**: Run the following command to execute unit tests with Karma:

  ```sh
  ng test
  ```

- **End-to-End Tests (e2e)**: Run Cypress to execute e2e tests:

  ```sh
  npx cypress open
  ```
  
  Alternatively, to run tests in the CLI:

  ```sh
  npx cypress run
  ```

### Backend
- Flask and Django applications have unit tests included. Use the `pytest` framework to run tests:

  ```sh
  pytest
  ```

## Contributions
Feel free to fork the repository, make improvements, and submit pull requests. Any contributions are highly appreciated!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
