import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly API_URL =  environment.url;
  constructor(private http: HttpClient) { }

  //Get Pokemons
  getPokemons(){
    return this.http.get(`${this.API_URL}`);
  }
//get pokemon
  getMoreData(name: String){
    return this.http.get(`${this.API_URL}/${name}`);
  }
}
