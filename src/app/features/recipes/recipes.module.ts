/**
 * @author @Abdelrahman
 *
 * @classdesc   Responsible for recipes components
 */
// ANGULAR MODULES
import { NgModule } from '@angular/core';

// ROUTING
import { RecipesRoutingModule } from './recipes-routing.module';

// MODULES
import { SharedModule } from '@rf/shared';

// COMPONENTS
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
