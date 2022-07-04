import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  filter = '';
  page:number=1;
  totalPokemons!: number;
  
  constructor(private pokemonServise:PokemonService) { }
  name!: string;
  ngOnInit(): void {
     this.pokemonServise.getPokemons()
     .subscribe((response:any)=> {
      this.totalPokemons=response.count;
      response.results.forEach((result:any) =>{
        this.pokemonServise.getMoreData(result.name)
        .subscribe((uniqResponse:any)=>{
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        })
      })
     });
  }
  setFilterValue(event: any): void {
  this.filter = event as string;
  }
}
