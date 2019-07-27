import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingrediant-model';
import { ShoppingListService } from './shopiinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  

  ingrediants=[];
  subscription:Subscription;

 
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.slService.getIngrediants();
    this.subscription = this.slService.ingredientsChanged.subscribe((ingrediantList:Ingredient[])=>{
       this.ingrediants = ingrediantList;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onIngredientAdded(ingrediant:Ingredient){
  //    this.ingrediants.push(ingrediant);
  // }

}
