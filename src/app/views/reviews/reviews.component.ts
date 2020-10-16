import { Component, OnInit } from '@angular/core';
import { Review } from './reviews.model';
import { ReviewsService } from './reviews.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    public reviews: Review[];
    constructor(private reviewService: ReviewsService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.reviewService
            .getById(this.route.parent.snapshot.params['id'])
            .subscribe(review => this.reviews = review);
    }

}
