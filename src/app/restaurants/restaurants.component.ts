import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {
 
  constructor(private service: ApiService, private router: Router) { }

  restaurants: any[] = [];
  index:number = 0;

  ngOnInit() {
    this.getRestaurantList();
  }

  getRestaurantList() {
    this.service.getRestaurants().subscribe(res => {
      this.restaurants = res;
    }, err => {

    })
  }

  goTorestaurant(d){
    this.router.navigate([`/restaurant/${d.id}`]);
  }

  fetchIndex(index){
    this.index = index;
    document.getElementById("openModalButton").click();
  }

}
