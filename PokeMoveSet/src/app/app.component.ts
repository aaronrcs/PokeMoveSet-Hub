import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { DirectoryComponent } from './directory/directory.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title = 'Pokemon app';



}
