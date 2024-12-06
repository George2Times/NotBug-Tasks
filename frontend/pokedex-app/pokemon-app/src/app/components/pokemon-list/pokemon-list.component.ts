import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Importowanie modułów, które są potrzebne
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  favoritePokemons: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPokemons();
    this.loadFavorites();
  }

  fetchPokemons(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .subscribe((response: any) => {
        this.pokemons = response.results;
      });
  }

  toggleFavorite(pokemon: any): void {
    const index = this.favoritePokemons.indexOf(pokemon.name);
    if (index === -1) {
      // Dodaj do ulubionych
      this.favoritePokemons.push(pokemon.name);
    } else {
      // Usuń z ulubionych
      this.favoritePokemons.splice(index, 1);
    }
    this.saveFavorites();
  }

  saveFavorites(): void {
    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
  }

  loadFavorites(): void {
    const favorites = localStorage.getItem('favoritePokemons');
    if (favorites) {
      this.favoritePokemons = JSON.parse(favorites);
    }
  }

  isFavorite(pokemon: any): boolean {
    return this.favoritePokemons.includes(pokemon.name);
  }
}
