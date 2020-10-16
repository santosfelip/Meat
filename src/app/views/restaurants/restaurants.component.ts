import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';

import { Restaurant } from './restaurant-creat/restaurant.model'
@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

    public restaurants: Restaurant[];

    constructor(private restaurantService: RestaurantService) { }

    ngOnInit(): void {
        this.restaurantService.getAll().subscribe(restaurants =>
            this.restaurants = restaurants
        );
    }

}
