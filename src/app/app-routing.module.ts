import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePComponent } from './home/home-p/home-p.component';
import { CharactersPageComponent } from './characters/characters-page/characters-page.component';

const routes: Routes = [





  {path:'', component:HomePComponent},
  {path:'personajes', component:CharactersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
