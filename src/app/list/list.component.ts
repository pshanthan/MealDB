import { Component } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../Models/Meal';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(private mealService: MealService) {}
  meals: Meal[] = [];
}
