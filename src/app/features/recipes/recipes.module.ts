import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-deatils/recipe-details.component';

const components = [
  RecipesComponent,
  RecipeItemComponent,
  RecipesListComponent,
  RecipeDetailsComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    SharedModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }