import { Ingredient } from '../shared/ingrediant-model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService{
    public ingredientsChanged = new Subject<Ingredient[]>();
    private ingrediants:Ingredient[]=[

        new Ingredient('Appales',10),
        new Ingredient('Bananna',2)
      ];
    getIngrediants(){
        return this.ingrediants.slice();
    }

    addIngrediant(ingredient:Ingredient){
       this.ingrediants.push(ingredient);
       this.ingredientsChanged.next(this.ingrediants.slice());
    }
    addIngrediants(ingredients:Ingredient[]){
      this.ingrediants.push(...ingredients);
      this.ingredientsChanged.next(this.ingrediants.slice());
    }
}