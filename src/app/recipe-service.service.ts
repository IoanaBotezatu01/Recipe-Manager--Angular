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

  async addRecipe(newRecipe: Irecipe): Promise<Irecipe> {

    const recipes = await this.getAllRecipes();
    const maxId = recipes.length ? Math.max(...recipes.map(r => r.id)) : 0;
    newRecipe.id = maxId + 1;
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });

    if (!response.ok) {
      throw new Error(`Failed to add recipe: ${response.statusText}`);
    }

    return await response.json(); 
  }
  
  
  async deleteRecipe(recipeId: number): Promise<void> {
    try {
      const response = await fetch(`${this.url}/${recipeId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Failed to delete recipe with ID ${recipeId}. Status: ${response.status}`);
      }
      console.log(`Recipe with ID ${recipeId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  }
  
}
