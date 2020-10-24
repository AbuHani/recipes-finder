/**
 * @author @Abdelrahman
 *
 * @classdesc   Responsible for listing recipes items, pagination and filter
 */
// ANGULAR MODULES
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

// SERVICES
import { RecipesService } from '../recipes.service';
import { Recipe } from '@rf/data/recipe';
@Component({
  selector: 'rf-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  recipes: Recipe[] = [];
  ingredients: string[] = [];
  totalResults: number;
  isFilterLoading: boolean;
  isDataLoading: boolean;
  pager = {
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0
  };

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.isFilterLoading = true;
    this.listRecipes(1);
  }

  /**
   * @desc  List recipes from API
   * @params  {number} page
   */
  listRecipes(page: number): void {
    this.recipes = [];
    this.isDataLoading = true;
    this.pager.currentPage = page;
    const query = {
      sort: 'popularity',
      includeIngredients: this.ingredients.join(','),
      number: this.pager.itemsPerPage,
      offset: (this.pager.currentPage - 1) * this.pager.itemsPerPage
    };
    const recipesSub = this.recipesService
      .getRecipes(query)
      .pipe(delay(2000))
      .subscribe((response) => {
        this.recipes = response.results;
        this.totalResults = response.totalResults;
        this.isDataLoading = false;
        this.isFilterLoading = false;
        console.log(response);
      }, (error) => {
        console.log(error);
        this.isDataLoading = false;
        this.isFilterLoading = false;
      });
    this.subscription.add(recipesSub);
  }

  /**
   * @desc  List recipes basded on Ingredients
   * @params  {string[]} data
   */
  onIngredientsEnterted(data: string[]): void {
    this.ingredients = data;
    this.listRecipes(1);
  }

  /**
   * @desc  List recipes basded on page number
   * @params  {{}} pager
   */
  onPageChanged(pager): void {
    this.pager.totalPages = pager.totalPages;
    if (pager.currentPage !== this.pager.currentPage) {
      this.listRecipes(pager.currentPage);
    }
  }

  /**
   * @desc  Unsubscribe
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
