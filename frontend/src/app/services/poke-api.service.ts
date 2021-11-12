import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokeList, Pokemon } from 'src/interfaces/interfaces';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class PokeApiService {
  BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}
  pokemons : Pokemon[] = []; 

    getPokemons() {
        return this.http.get<PokeList>(this.BASE_URL); 
    }
}

    