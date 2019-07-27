import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { TouchSequence } from 'selenium-webdriver';
import { ActivatedRoute ,Params, Route, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService:RecipeService,private router:ActivatedRoute,private route:Router) {
      
   }
  recipe:Recipe;
  id:number;
  ngOnInit() {
      this.router.params.subscribe(

        (params:Params) => {
          this.id =  params['id'];
          this.recipe = this.recipeService.getRecipeDetails(this.id);
        }
      );
  }
 
  onAddToShoppiingList(){
    console.log('On Add To Shopping List Called ');
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
     this.route.navigate(['edit'],{relativeTo:this.router});
  }
}
