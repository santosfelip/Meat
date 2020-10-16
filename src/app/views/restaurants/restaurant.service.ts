import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Restaurant } from './restaurant-creat/restaurant.model';

import { MEAT_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler'

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getAll(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
            .pipe(
                retry(2),
                catchError(ErrorHandler.handleError))
    }
    getById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
            .pipe(
                retry(2),
                catchError(ErrorHandler.handleError))
    }
}
