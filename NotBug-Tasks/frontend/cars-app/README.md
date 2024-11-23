# Cars App

Aplikacja `Cars App` to aplikacja frontendowa napisana w Angularze, która umożliwia użytkownikom zarządzanie pojazdami przechowywanymi w lokalnej pamięci (`localStorage`). Możesz dodać pojazdy, przechowywać informacje o serwisach (części i koszty), a następnie wyświetlać te dane w widoku szczegółów.

## Funkcjonalności
- Dodawanie, edycja i usuwanie pojazdów.
- Przechowywanie informacji o serwisach, takich jak części i koszty.
- Widok listy pojazdów oraz szczegółowe informacje o każdym pojeździe.

## Technologie
- Angular
- RxJS (do reaktywnych operacji w aplikacji)

## Uruchomienie Aplikacji
1. Sklonuj repozytorium:
    ```sh
    git clone https://github.com/your_username/cars-app.git
    cd cars-app
    ```
2. Zainstaluj zależności:
    ```sh
    npm install
    ```
3. Uruchom aplikację:
    ```sh
    ng serve
    ```
4. Przejdź do przeglądarki i wpisz adres `http://localhost:4200` aby zobaczyć aplikację.

## Struktura Folderów
- `src/app/components/car-list` - komponent do wyświetlania listy pojazdów.
- `src/app/components/car-details` - komponent do wyświetlania szczegółów pojazdu.
- `src/app/services/car-storage.service.ts` - serwis do zarządzania lokalną pamięcią (localStorage).

## Przechowywanie Danych
Aplikacja korzysta z `localStorage` do przechowywania danych o pojazdach i serwisach. Dzięki temu dane pozostają zachowane nawet po odświeżeniu przeglądarki.

## Instrukcje
1.1 Create Flask app which will be REST API app for To-Do list, which allow user to create task, list, update and delete them. Data could be “mocked”, extra points for using SQLite or PostgreSQL. URLS need to be in REST API convention.