import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipe.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //input used to bind data to type recipe
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    //emit recipe when Recipe-Item is clicked
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
