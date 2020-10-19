import { Component } from '@angular/core';

import { Menu } from '../menu.model';


@Component({
    selector: 'app-menu-storie',
    templateUrl: '../menu.component.html',
    styleUrls: ['../menu.component.css']
})
export class MenuStorie {
    public menus: Menu[] = [];

    constructor() { }


}
