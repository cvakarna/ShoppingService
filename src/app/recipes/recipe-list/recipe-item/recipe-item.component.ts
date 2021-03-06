import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() recipeIndex:number;
  constructor(private recipeService:RecipeService) { 

  }

  ngOnInit() {
    console.log(this.recipeIndex);  
  }

  // onSelected(){
  //   console.log("on Slected");
  //    //this.selctedRecipeItem.emit();
  //   this.recipeService.selectedRecipe.emit(this.recipe);
  // }

}
