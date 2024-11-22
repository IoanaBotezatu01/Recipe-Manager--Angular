import { Component, inject } from '@angular/core';
import { RecipeComponent } from "../recipe/recipe.component";
import { Irecipe } from '../irecipe';
import { DetailsComponent } from '../details/details.component';
import { CommonModule, getLocaleExtraDayPeriodRules } from '@angular/common';
import { Inject } from '@angular/core';
import { RecipeServiceService } from '../recipe-service.service';
import { isReactive } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeComponent,CommonModule,FormsModule,RouterLink,RouterOutlet],
  template: `<input type="checkbox" id="vegan" name="vegan" (click)="filterList()" >Vegan
  <button [routerLink]="['/add']">Add Your Recipe!</button>
  <section class="result">
<app-recipe
  *ngFor="let recipe of filteredList" 
  [recipe]="recipe"
   (recipeDeleted)="removeRecipeFromList($event)"
  >
</app-recipe>
</section>`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  baseUrl = 'https://images.unsplash.com';

  recipeList: Irecipe[] = [];
  filteredList:Irecipe[]=this.recipeList;
  isVegan:boolean=true;
  recipeService:RecipeServiceService=inject(RecipeServiceService);
  constructor(){
    this.recipeService.getAllRecipes().then((recipeList:Irecipe[])=>
    {this.recipeList=recipeList;
    this.filteredList=this.recipeList;
    } );
  }
  ngOnChanges()
  {
    this.filterList();
  }
  filterList(){
    if(this.isVegan)
      this.filteredList=this.recipeList.filter(r=>r.vegan)
    else
    this.filteredList=this.recipeList;
    this.isVegan=!this.isVegan;

  }
  removeRecipeFromList(recipeId: number): void {
    this.filteredList = this.filteredList.filter((recipe) => recipe.id !== recipeId);
    console.log(`Recipe with ID ${recipeId} removed from the list.`);
  }
  
}
