import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {

	//ingredientsChanged = new EventEmitter<Ingredient[]>();
	ingredientsChanged = new Subject<Ingredient[]>();

	constructor() { }

	private ingredients: Ingredient[] = [
	new Ingredient('Apples', 5),
	new Ingredient('Tomatoes', 10),
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		//emits event every time new ingredient is added with return of array
		this.ingredientsChanged.next(this.ingredients.slice());
	}


	//Final function in chain to add ingredients pass from recipe-detail to recipe-service.
	addIngredients (ingredients: Ingredient[]) {
		
		/*for (let ingredient of ingredients) {
			this.addIngredient(ingredient);
		}*/

		//pushes ingredients from parameter to shopping list ingriedents
		this.ingredients.push(...ingredients);
		console.log('Ingredients pushed');
		this.ingredientsChanged.next(this.ingredients.slice());
		console.log('Ingredients changed');
		console.log(this.ingredients);

	}
}
