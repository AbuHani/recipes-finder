/**
 * @author @Abdelrahman
 * @classdesc   Recipes service
 */
// ANGULAR MODULES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// SERVICES
import { QueryPayload, RESTService } from '@rf/core';
import { Recipe, RecipeResponse } from '@rf/data/recipe';

// ENVIRONMENTS
import { environment } from '@rf/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private rest: RESTService) { }

  /**
   * @desc    Get recipes from API
   * @params  {QueryPayload} queryParams
   *
   * @returns Observable
   */
  getRecipes(queryParams: QueryPayload): Observable<RecipeResponse> {
    const url = [environment.spoonacular.baseUrl, 'recipes/complexSearch/'].join('');

    return this.rest.get(url, queryParams);
  }

  /**
   * @desc    Get recipe information from API
   * @params  {number} id
   * @returns Observable
   */
  getRecipe(id: number): Observable<Recipe> {
    const url = [environment.spoonacular.baseUrl, `recipes/${id}/information`].join('');

    return this.rest.get(url);
  }
}
