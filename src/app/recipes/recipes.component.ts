import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  //selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	//subscribing (listening) to event emitter so selectedRecipe will update when event changes
  	
    /*this.recipeService.recipeSelected.subscribe(
  			(recipe: Recipe) => {
  				this.selectedRecipe = recipe;
  			}
  		);*/
  }

 

}
