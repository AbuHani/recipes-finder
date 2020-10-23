import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../../data/recipe';
@Component({
  selector: 'rf-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  filterQuery = {};
  recipes: Recipe[] = [];
  ingredients: string[] = [];
  subscription: Subscription = new Subscription();
  totalResults: number;
  pager = {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0
  };

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.listRecipes(1);
  }

  listRecipes(page): void {
    this.recipes = [];
    this.pager.currentPage = page;
    const query = {
      sort: 'popularity',
      includeIngredients: this.ingredients.join(','),
      number: this.pager.itemsPerPage,
      offset: (this.pager.currentPage - 1) * this.pager.itemsPerPage
    };
    const recipesSub = this.recipesService
      .getRecipes(query)
      .subscribe((response) => {
        this.recipes = response.results;
        this.totalResults = response.totalResults;
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    this.subscription.add(recipesSub);
  }

  onIngredientsEnterted(data: string[]): void {
    this.ingredients = data;
    this.listRecipes(1);
  }

  onPageChanged(pager): void {
    this.pager.totalPages = pager.totalPages;
    if (pager.currentPage !== this.pager.currentPage) {
      this.listRecipes(pager.currentPage);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
