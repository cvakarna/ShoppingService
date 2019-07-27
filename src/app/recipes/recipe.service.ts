import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingrediant-model';
import { ShoppingListService } from '../shopping-list/shopiinglist.service';

@Injectable()
export class RecipeService{
    
    public selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
     new Recipe('Greek Salad',
     'Greek Salad With Lemon Dressing',
     'https://www.ndtv.com/cooks/images/Greek%20Salad%20with%20Lemon%20Dressing.jpg',
     [
         new Ingredient('Tamoto',2),
         new Ingredient('panner',10)
     ]
     ),
     new Recipe('Traditional Greek Salad',
     'Traditional Greek Salad With Lemon Dressing',
     'http://www.recipe4living.com/assets/itemimages/400/400/3/649917176d1e703f5113858e3f03e169_Traditional%20Greek%20Salad.jpg',
     [
        new Ingredient('Tamoto',2),
        new Ingredient('panner',10),
        new Ingredient('Onion',1)
     ]
     )
    ]

    constructor(private slService:ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
       this.slService.addIngrediants(ingredients);
    }
    getRecipeDetails(index:number){
        return this.recipes[index];
    }

}