# NotBug Recruitment Tasks

To repozytorium zawiera projekty frontendowe i backendowe w ramach zadań rekrutacyjnych dla NotBug. Znajdziesz tutaj aplikacje napisane przy użyciu Angulara, Flaska i Django.

### Struktura
- `frontend/` - Aplikacje frontendowe w Angular.
- `backend/` - Aplikacje backendowe w Pythonie (Flask i Django).

## Spis Treści

### Frontend
1. [1.1 Angular App: Cars App](frontend/cars-app/) - Aplikacja do zarządzania pojazdami przechowywanymi w localStorage.
2. DONE [1.2 RxJS: Obliczenie średniego wieku osób](frontend/cars-app/src/app/services/rxjs-age-calc.ts) - Skrypt do obliczenia średniego wieku osób mieszkających w Polsce.
3. [1.3 Angular App: Pokedex App](frontend/pokedex-app/) - Aplikacja do wyświetlania listy Pokemonów z użyciem PokeAPI.

### Backend
4. [2.1 Flask App: To-Do List](backend/flask-todo/) - Aplikacja REST API do zarządzania listą zadań (CRUD).
5. DONE [2.2 Django App: Blog App](backend/django-blog/) - Aplikacja blogowa z możliwością rejestracji, tworzenia i edytowania wpisów.
6. DONE [2.3 Python Script: Filtracja użytkowników z Polski](backend/flask-todo/utils/filter-polish-users.py) - Skrypt do stworzenia listy użytkowników tylko z Polski za pomocą List Comprehension.
7. DONE [2.4 Python Script: Obliczenia matematyczne](backend/flask-todo/utils/math-operations.py) - Skrypt do obliczenia sumy elementów listy oraz wypełnienia listy potęgami liczby 2.

## Instrukcja uruchomienia

### Frontend
Przejdź do odpowiedniego folderu z aplikacją Angular, np. `cars-app` lub `pokedex-app`, a następnie uruchom komendy:
```sh
npm install
ng serve
```

### Backend - Flask
Przejdź do folderu `flask-todo`:
```sh
pip install -r requirements.txt
python app.py
```

### Backend - Django
Przejdź do folderu `django-blog`, a następnie:
```sh
pip install -r requirements.txt
python manage.py runserver
```

