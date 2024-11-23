# Pokedex App

Aplikacja `Pokedex App` to frontendowa aplikacja napisana w Angularze, która umożliwia przeglądanie listy Pokemonów oraz szczegółowych informacji o każdym z nich. Dane są pobierane z publicznego API [PokeAPI](https://pokeapi.co).

## Funkcjonalności
- Wyświetlanie listy Pokemonów z podstawowymi informacjami.
- Możliwość kliknięcia na Pokemona, aby zobaczyć jego szczegóły, takie jak statystyki, typy i umiejętności.

## Technologie
- Angular
- RxJS
- HTTP Client do wykonywania zapytań do PokeAPI

## Uruchomienie Aplikacji
1. Sklonuj repozytorium:
    ```sh
    git clone https://github.com/your_username/pokedex-app.git
    cd pokedex-app
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
- `src/app/components/pokemon-list` - komponent do wyświetlania listy Pokemonów.
- `src/app/components/pokemon-details` - komponent do wyświetlania szczegółowych informacji o wybranym Pokemonie.
- `src/app/services/pokemon.service.ts` - serwis do pobierania danych z PokeAPI.

## API
Aplikacja korzysta z [PokeAPI](https://pokeapi.co) do pobierania danych o Pokemonach.

## Instrukcje
1.3 Angular app – create app to display list of pokemons and details view for each of them. Data need to be fetched from https://pokeapi.co using HTTP requests.
