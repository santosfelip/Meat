import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { HomeStorie } from './home.storie'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export default {
    title: 'MEAT/Home',
    component: HomeStorie,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                MatButtonModule,
                MatCardModule
            ]
        })
    ]
}

export const CardComButton = () => ({
    component: HomeStorie,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, MatButtonModule, MatCardModule]
        })
    ],

})
