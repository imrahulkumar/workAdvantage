import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { restaurantList } from "../utils/utility";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public getRestaurants(): any {
    const observer = new Observable(observer => {
      setTimeout(() => {
        observer.next(restaurantList);
      }, 500);
    });
    return observer;
  }

  public getRestaurantById(id): any {
    const observer = new Observable(observer => {
      setTimeout(() => {
        let restroList:any[] = [];
        restroList = Object.assign({},restaurantList)
        let restaurant = restaurantList.filter(d=> d.id == id);
        restaurant.length > 0 ? observer.next(restaurant[0]) : observer.error("No Data Found");
      }, 500);
    });
    return observer;
  }
}
