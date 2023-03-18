import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CostaComponent } from './costa/costa.component';
import { HomeComponent } from './home/home.component';
import { SierraComponent } from './sierra/sierra.component';
import { AmazoniaComponent } from './amazonia/amazonia.component';
import { IslasComponent } from './islas/islas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'costa', component: CostaComponent },
  { path: 'sierra', component: SierraComponent },
  { path: 'amazonia', component: AmazoniaComponent },
  { path: 'islas', component: IslasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
