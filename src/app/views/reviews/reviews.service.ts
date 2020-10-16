import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MEAT_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler';

import { Review } from './reviews.model';

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {

    constructor(private http: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getById(reviewId: string): Observable<Review[]> {
        return this.http.get<Review[]>(`${MEAT_API}/restaurants/${reviewId}/reviews`)
            .pipe(
                retry(2),
                catchError(ErrorHandler.handleError))
    }
}
