import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './views/toolbar/toolbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { AboutComponent } from './views/about/about.component';
import { RestaurantCreatComponent } from './views/restaurants/restaurant-creat/restaurant-creat.component';
import { MenuComponent } from './views/menu/menu.component';
import { RestaurantDetailComponent } from './views/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './views/reviews/reviews.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ToolbarComponent,
        FooterComponent,
        RestaurantsComponent,
        AboutComponent,
        RestaurantCreatComponent,
        MenuComponent,
        RestaurantDetailComponent,
        ReviewsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
