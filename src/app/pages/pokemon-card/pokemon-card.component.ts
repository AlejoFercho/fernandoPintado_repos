import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private router: Router,
    private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  redirectToDetails(pokemon: any): void {
    //this.pokemonService.setCurrentPokemon(pokemon);
    this.router.navigate(['', pokemon.id]);
  }
}
