import { Injectable } from '@angular/core';
import { Irecipe } from './irecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  

  constructor() { 

  }
  async getAllRecipes():Promise<Irecipe[]>{
    const data=await fetch(this.url)
    return await data.json()??[]
  }
  async getRecipeByID(recipeId: number):Promise<Irecipe|undefined>{
    const data=await fetch(`${this.url}/${recipeId}`);
    return await data.json()??{};
  }
  url="http://localhost:3000/recipes"
  baseUrl = 'https://images.unsplash.com';
  recipeList: Irecipe[] = [];

  addRecipe(newRecipe: Irecipe): Promise<void> {
    
    return new Promise((resolve) => {
      console.log('Recipe added:', newRecipe);
      resolve();
    });
  }
}
