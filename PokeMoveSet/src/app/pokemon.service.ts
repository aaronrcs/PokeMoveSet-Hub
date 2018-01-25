import { Injectable } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  constructor(private http: Http) { }


  getPokemonData(){

    return this.http.get('https://pokemondb-angular.firebaseio.com/.json').map(

      (res) => res.json()
    );
  }

}
