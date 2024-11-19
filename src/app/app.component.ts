import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DetailsComponent } from './details/details.component';
import { Routes } from '@angular/router';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  template: `<section><h1>Discover new recipes!</h1>
  <router-outlet></router-outlet></section>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeManager';
}
