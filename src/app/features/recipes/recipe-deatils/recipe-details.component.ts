import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/data/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rf-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;
  subscription: Subscription = new Subscription();
  recipe: Recipe;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit(): void {
    const routeSub = this.activeRoute.params.subscribe(params => {
      const recipeId = params['id'];
      this.getRecipeDetails(recipeId);
    });
    this.subscription.add(routeSub);
  }

  getRecipeDetails(recipeId): void {
    const recipesSub = this.recipesService
      .getRecipe(recipeId)
      .subscribe((response) => {
        this.recipe = response;
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    this.subscription.add(recipesSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
