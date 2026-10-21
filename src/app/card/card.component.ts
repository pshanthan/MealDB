import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meal } from '../Models/Meal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() meal!: Meal;
}
