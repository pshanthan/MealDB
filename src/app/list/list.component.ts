import { Component, OnInit } from '@angular/core';
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
export class ListComponent implements OnInit {
  constructor(private mealService: MealService) {}
  meals: Meal[] = [];
  ngOnInit(): void {
    this.getMeals('chicken');
  }
  getMeals(term: string) {
    this.mealService.getMeal(term).subscribe((m) => (this.meals = m.meals));
  }
  getMealById(id: number) {
    this.mealService.getMealById(id).subscribe((m) => m.idMeal === String(id));
  }
}
