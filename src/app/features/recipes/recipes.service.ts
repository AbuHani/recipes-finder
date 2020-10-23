import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { RESTService, QueryPayload } from '../../core/services/rest.service';
import { Recipe, RecipeResponse } from '../../data/recipe';


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
