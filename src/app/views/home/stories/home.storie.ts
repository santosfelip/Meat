import { Component } from '@angular/core';

@Component({
    selector: 'app-home-storie',
    templateUrl: './home.storie.html',
    styleUrls: ['./home.storie.css']
})
export class HomeStorie {
    public Title: string;


    constructor() {
        this.Title = "Meat";
    }

}
