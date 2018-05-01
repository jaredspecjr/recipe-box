import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-box';
  name: string = "cookies";
  directions: string = "put stuff together yo";
  ingredients: Ingredient[] = [
    new Ingredient('Sugar', 0),
    new Ingredient('Eggs', 0),
    new Ingredient('Chocolate Chips', 0),
    new Ingredient('Flour', 0),
    new Ingredient('butter', 0)
  ];
  selectedIngredient: Ingredient = this.ingredients[0];

  checkedColor(currentIngredient){
    if(currentIngredient.checked === 0){
      return "bg-white";
    } else {
      return "bg-success";
    }
  }
  checkOff(clickedIngredient){
    this.selectedIngredient = clickedIngredient;
    if(clickedIngredient.checked === 1){
      clickedIngredient.checked = 0;
    } else {
      clickedIngredient.checked = 1;
    }
  }

}
