import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-box';
  name: string = "cookies"
  directions: string = "put stuff together yo"
  ingredients: Ingredient[] = [
    new Ingredient('Sugar'),
    new Ingredient('Eggs'),
    new Ingredient('Chocolate Chips'),
    new Ingredient('Flour'),
    new Ingredient('butter')
  ];
}
