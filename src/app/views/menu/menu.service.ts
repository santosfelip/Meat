import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from '../../app.api';
import { ErrorHandler } from '../../app.error-handler'
import { Menu } from './menu.model'
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    getByRestaurantId(restaurantId: string): Observable<Menu[]> {
        return this.http.get<Menu[]>(`${MEAT_API}/restaurants/${restaurantId}/menu`)
            .pipe(
                retry(2),
                catchError(ErrorHandler.handleError))
    }
}
