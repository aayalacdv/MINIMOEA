import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeList, Pokemon } from 'src/interfaces/interfaces';
import { PokeApiService } from '../services/poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons : Pokemon[] = []; 

  constructor( private http : HttpClient, private pokeService : PokeApiService, private router : Router) { }

  ngOnInit(): void {
   this.getPokemons(); 


  }

  go( name : string){
    this.router.navigate(['pokeInfo', name]); 
    
  }


  getPokemons(){
    this.pokeService.getPokemons().subscribe((response : PokeList) => {
        this.pokemons = response.results.map((data: Pokemon) => {
        this.http.get(data.url).subscribe((res: any) => {
          data.imageUrl = res.sprites.other.home.front_default;
        });
        return data;
      });
      console.log(this.pokemons); 
    })

  }
}



