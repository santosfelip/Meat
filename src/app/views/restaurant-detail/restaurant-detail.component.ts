import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Restaurant } from '../restaurants/restaurant-creat/restaurant.model';
import { RestaurantService } from '../restaurants/restaurant.service';

@Component({
    selector: 'app-restaurant-detail',
    templateUrl: './restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

    restaurant: Restaurant

    constructor(private restaurantsService: RestaurantService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.restaurantsService.getById(this.route.snapshot.params['id'])
            .subscribe(restaurant => this.restaurant = restaurant)
    }

}
