import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeDeatilsComponent } from './recipe-deatils/recipe-deatils.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipesComponent,
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: RecipesListComponent
  },
  {
    path: ':id',
    component: RecipeDeatilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
