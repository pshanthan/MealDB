import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit {
  constructor(
    private mealService: MealService,
    private activatedRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {}
}
