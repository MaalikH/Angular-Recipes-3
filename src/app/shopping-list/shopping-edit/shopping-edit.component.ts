import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //VIEW CHILD TO GRAB DATA FROM INPUTS IN SHOPPING-EDIT.HTML
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService : ShoppingListService ) { }

  ngOnInit() {
  }

  onAddItem() {
    //SET CONST TO VIEW CHILD TO BE USED IN NEW INGREDIENT
    //USE SHOPPING LIST ADD INGREDIENT FUNCTION IN SERVICE TO ADD NEW INGREDIENT TO ARRAY
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);

  }

}
