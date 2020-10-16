import { Component, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
    selector: 'app-restaurant-creat',
    templateUrl: './restaurant-creat.component.html',
    styleUrls: ['./restaurant-creat.component.css']
})
export class RestaurantCreatComponent {

    @Input() public restaurant: Restaurant
    constructor() { }



}
