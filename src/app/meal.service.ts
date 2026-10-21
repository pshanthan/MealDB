import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from './Models/Meal';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'https://www.themealdb.com/api/json/v1/1/';
  getMeal(searchTerm: string): Observable<{ meals: Meal[] }> {
    return this.httpClient.get<{ meals: Meal[] }>(
      `${this.apiUrl}search.php?s=${searchTerm}`,
    );
  }
}
