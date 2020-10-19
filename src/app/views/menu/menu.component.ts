import { Component, OnInit } from '@angular/core';

import { Menu } from './menu.model';
import { MenuService } from './menu.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public menus: Menu[] = [];

    constructor(private menuService: MenuService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.menuService
            .getByRestaurantId(this.route.parent.snapshot.params['id'])
            .subscribe(menu => this.menus = menu);
    }

}
