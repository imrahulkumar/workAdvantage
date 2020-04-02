import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:"",redirectTo:"restaurants",pathMatch:"full"},
  {path:"restaurants",component:RestaurantsComponent},
  { path: 'restaurant/:id',component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
