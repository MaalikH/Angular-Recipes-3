import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

//event to be called when recipe is selected in Recipe-Item
  //recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService : ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient ('Bacon', 1)]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',  [new Ingredient ('Bacon', 1)])
  ];

  getRecipes() {
  	//return new array as copy of original array
  	return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  //Function calls shoppingListSerivce function addIngredients to add ingredients passed from recipe-detail
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  	this.shoppingListService.addIngredients(ingredients);
  }
}
