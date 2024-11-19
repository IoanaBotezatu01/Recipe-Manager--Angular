import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Irecipe } from '../irecipe';
import { RouterLink,RouterOutlet } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { DetailsComponent } from '../details/details.component';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterLink,CommonModule],
  template: `
  <section class="list">
  <img class="listing-photo" [src]="recipe.photo" alt="Photo of {{recipe.name}}">
  <h1>{{recipe.name}}</h1>
  <p class="ingredients">Ingredients:{{recipe.ingredients}}</p>
  <p class="diff">Difficulty:{{recipe.difficulty}}</p>
  <p class="time">Time:{{recipe.time}}</p>
  <p class="vegan">Vegan-{{recipe.vegan}}</p>
  <a [routerLink]="['/recipe', recipe.id]">See the recipe:</a>
  <button (click)="deleteRecipe(recipe.id)">🗑</button>
  </section>`,
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
@Input() recipe!:Irecipe;
@Input()deleteRecipe!:(recipeId:number)=>void;
}
