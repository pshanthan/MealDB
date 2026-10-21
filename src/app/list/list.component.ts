import { Component } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../Models/Meal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private mealService: MealService) {}
  meals: Meal[] = [];
  getMeals() {
    this.mealService.getMeal().subscribe((m) => (this.meals = m));
  }
}
