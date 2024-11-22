import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Irecipe } from '../irecipe';
import { RecipeServiceService } from '../recipe-service.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  recipeService1:RecipeServiceService=inject(RecipeServiceService);
  newRecipe: Irecipe = {
    id: 0,
    name: '',
    ingredients: '',
    difficulty: 'Easy',
    time: '',
    vegan: false,
    photo: '',
    instructions: ''
  };
  constructor(private recipeService: RecipeServiceService, private router: Router) {}

  addRecipe(): void {
    this.recipeService.addRecipe(this.newRecipe).then(() => {
      this.router.navigate(['/']); 
    });
  }
}
