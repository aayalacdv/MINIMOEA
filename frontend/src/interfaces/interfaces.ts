
export interface PokeList {
    next : string; 
    results: Pokemon[]; 
  }
  
export interface Pokemon {
    name: string; 
    url: string; 
    imageUrl: string; 
  }