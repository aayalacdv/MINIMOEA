import { PersonasListaComponent } from './personas-lista/personas-lista.component';
import { NgModule } from '@angular/core';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : 'pokeInfo/:name', component: PokeInfoComponent},
  { path : 'pokemonList', component: PokemonListComponent},
  { path: 'personaslist', component: PersonasListaComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
