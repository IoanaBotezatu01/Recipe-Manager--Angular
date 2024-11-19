import { Component,inject } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Inject } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { RecipeServiceService } from '../recipe-service.service';
import { Irecipe } from '../irecipe';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  
  recipeService=inject(RecipeServiceService);
  recipe:Irecipe|undefined;
  constructor()
  {
    const recipeId=parseInt(this.route.snapshot.params['id'],10)
    this.recipeService.getRecipeByID(recipeId).then(recipe=>{this.recipe=recipe}) ;
  }
}
