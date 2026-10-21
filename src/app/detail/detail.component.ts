import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../Models/Meal';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  meal?: Meal;
  constructor(
    private mealService: MealService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.mealService.getMealById(id).subscribe((res) => {
      this.meal = res.meals[0];
    });
  }
}
