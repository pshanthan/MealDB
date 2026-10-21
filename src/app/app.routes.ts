import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'meal/:id',
    component: DetailComponent,
  },
];
