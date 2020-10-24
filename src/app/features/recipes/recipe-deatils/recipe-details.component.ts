/**
 * @author @Abdelrahman
 * @classdesc   Recipe details component
 */
// ANGULAR MODULES
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Recipe } from 'src/app/data/recipe';

// SERVICES
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rf-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  subscription: Subscription = new Subscription();
  recipe: Recipe;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const routeSub = this.activeRoute.params.subscribe(params => {
      const recipeId = params['id'];
      this.getRecipeDetails(recipeId);
    });
    this.subscription.add(routeSub);
  }

  /**
   * @desc  Get recipe details from recipes service
   * @params  {number} recipeId
   */
  getRecipeDetails(recipeId: number): void {
    const recipesSub = this.recipesService
      .getRecipe(recipeId)
      .pipe(delay(1000))
      .subscribe((response) => {
        this.recipe = response;
        this.isLoading = false;
      }, (error) => {
        this.isLoading = false;
      });
    this.subscription.add(recipesSub);
  }

  /**
   * @desc Unsubscribe
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
