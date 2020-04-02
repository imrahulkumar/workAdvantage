import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ApiService) {
    this.route.params.subscribe( (params) => {
      this.restaurantId = params['id'];
    });
   }
 
  restaurantId:any;
  restaurantData:any;
  isLoad:boolean = false;

  ngOnInit() {   
    this.getRestaurantById(this.restaurantId);
    }

  getRestaurantById(id){
    console.log(id)
    this.service.getRestaurantById(id).subscribe(res => {
   
      console.log(res)
      this.restaurantData = res;
      this.isLoad = true;
    }, err => {
      this.isLoad = false;
    })
  }
}
