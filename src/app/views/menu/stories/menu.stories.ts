import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { MenuStorie } from './menu.storie'
import { MatCardModule } from '@angular/material/card';

export default {
    title: 'MEAT/Card',
    component: MenuStorie,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                MatCardModule
            ]
        })
    ]
}

export const Menu = [{
    id: "cup-cake",
    imagePath: "assets/img/foods/cupcake.png",
    name: "Cup Cake",
    description: "Cup Cake recheado de Doce de Leite",
    price: 8.7,
    restaurantId: "bread-bakery"
}]


export const CardComButton = () => ({
    component: MenuStorie,
    pros: {
        menu: Menu
    },
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, MatCardModule]
        })
    ],

})
