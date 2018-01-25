import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { DirectoryComponent } from './directory/directory.component';
import { PokemonFilterPipe } from './pokemon-filter.pipe';
import { PokemonService } from './pokemon.service';
import { HttpModule, RequestOptions } from '@angular/http';




const appRoutes: Routes = [
  { path: 'directory', component: DirectoryComponent },
  // { path: 'directory/:pokemon', component: DirectoryComponent},
  { path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    PokemonFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
