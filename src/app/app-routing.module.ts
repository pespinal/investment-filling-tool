import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesPaths } from './shared/domain/routes-paths';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../features/auth/auth.module#AuthModule',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: '../features/home/home.module#HomeModule',
    pathMatch: 'full',
  },
  {
    path: 'form1',
    loadChildren: '../features/forms/forms.module#FormsModule',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
