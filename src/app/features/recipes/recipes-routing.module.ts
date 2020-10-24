/**
 * @author @Abdelrahman
 *
 * @classdesc Responsible for handling recipes module routing
 */
// ANGULAR CORE MODULES
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-deatils/recipe-details.component';

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
    component: RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
