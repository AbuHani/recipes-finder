import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/data/recipe';

@Component({
  selector: 'rf-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
