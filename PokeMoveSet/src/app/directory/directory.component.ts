import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonFilterPipe } from '../pokemon-filter.pipe';
declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  listOfPokemon = [];




  constructor(private pokemonService: PokemonService) { 

  }

  
  ngOnInit() {

    // this.pokemonService.getPokemonData().subscribe(

    //   (data) => this.listOfPokemon = data

    // );

    this.fbGetPokemonData();
  }

  fbGetPokemonData(){
    firebase.database().ref('/').on('child_added', (snapshot) =>{

     
      this.listOfPokemon.push(snapshot.val())
    })

   
  }

  fbPostPokemon(name, type, type2,m1,m2,m3,m4,reason){

   firebase.database().ref('/').push({name: name, type: type, type2: type2, m1:m1, m2:m2, m3:m3, m4:m4, reason:reason});


  }

}
