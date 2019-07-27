import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppingServiceApp';

  featureSelected:string='recipe'
  onNavigate(feature:string){
     this.featureSelected = feature;
  } 
}
