import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { RestaurantDetailComponent } from './views/restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { ReviewsComponent } from './views/reviews/reviews.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
