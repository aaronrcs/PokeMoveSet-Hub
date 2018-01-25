import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(pokemons: any, searchValue: any): any {
    
    // if search is undefined, return all pokemon
    // else return the array of the searched pokemon

    if(searchValue === undefined){
      return pokemons;
    }

    return pokemons.filter(function(getPokemon){

      return getPokemon.name.toLowerCase().includes(searchValue.toLowerCase());

    })
    

  }

}
