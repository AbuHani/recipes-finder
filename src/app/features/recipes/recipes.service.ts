import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryPayload, RESTService } from '@rf/core';
import { Recipe, RecipeResponse } from '@rf/data/recipe';
import { environment } from '@rf/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private rest: RESTService) { }


  getRecipes(queryParams: QueryPayload): Observable<RecipeResponse> {
    const url = [environment.spoonacular.baseUrl, 'recipes/complexSearch/'].join('');

    return this.rest.get(url, queryParams);
  }

  getRecipe(id: number): Observable<Recipe> {
    const url = [environment.spoonacular.baseUrl, `recipes/${id}/information`].join('');

    return this.rest.get(url);
  }
}
