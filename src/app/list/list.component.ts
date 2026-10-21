import { Component } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../Models/Meal';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private mealService: MealService) {}
  searchTerm: string | null = null;
  meals: Meal[] = [];

  getMeals(term: string) {
    this.mealService.getMeal(term).subscribe((m) => (this.meals = m.meals));
  }
}
