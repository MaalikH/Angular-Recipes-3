import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription'
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  //EMPTY LOCAL ARRAY
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    //SET LOCAL ARRAY = TO ARRAY IN SERVICE USING getIngredients FUNCTION
    this.ingredients = this.shoppingListService.getIngredients();
    //Every time event is emitted (when ingredient is added in service function) the array is updated with new array in event emitter
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients : Ingredient[]) => {
          this.ingredients = ingredients;
          console.log(this.ingredients);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
