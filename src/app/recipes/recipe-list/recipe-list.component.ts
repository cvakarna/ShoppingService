import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { createWiresService } from 'selenium-webdriver/firefox';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  // @Output() selectedRecipeWas:EventEmitter<Recipe>=new EventEmitter<Recipe>();
  recipes:Recipe[]=[];
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      this.recipes= this.recipeService.getRecipes();
  }

  addNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  // onRecipeSelected(recipe:Recipe){
  //   console.log(recipe)
  //    this.selectedRecipeWas.emit(recipe);
  // }
}
