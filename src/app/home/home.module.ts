import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePComponent } from './home-p/home-p.component';
import { TableEpisodesComponent } from './table-episodes/table-episodes.component';
import { TableFavoritesComponent } from './table-favorites/table-favorites.component';



@NgModule({
  declarations: [
    HomePComponent,
    TableEpisodesComponent,
    TableFavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
