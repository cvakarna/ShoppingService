import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingrediant-model';
import { ShoppingListService } from '../shopiinglist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

//  @ViewChild('nameInput')nameInputRef:ElementRef
//  @ViewChild('amountInput')amountInputRef:ElementRef
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngridiant(form:NgForm){
    var formValue = form.value;
    //const name = this.nameInputRef.nativeElement.value;
    //const amount = this.amountInputRef.nativeElement.value;
    const ingrediant = new Ingredient(formValue.name,formValue.amount);
    this.slService.addIngrediant(ingrediant);
    
  }
}
