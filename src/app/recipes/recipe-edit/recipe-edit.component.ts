import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  id:number;
  isEdit:boolean;
  ngOnInit() {

      this.route.params.subscribe((params:Params)=>{
        
        this.id = +params['id'];
        this.isEdit = params['id']!=null;
        console.log('Is Edited Mode:',this.isEdit);
      });

  }

}
