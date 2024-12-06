import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';



@NgModule({
  declarations: [
    CharactersPageComponent,
    CharactersCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
