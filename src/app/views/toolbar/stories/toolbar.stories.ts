import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ToolbarStorie } from './toolbar.storie'
import { MatToolbarModule } from '@angular/material/toolbar';


export default {
    title: 'MEAT/Toolbar',
    component: ToolbarStorie,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                MatToolbarModule
            ]
        })
    ]
}


export const Toolbar = () => ({
    component: ToolbarStorie,
    pros: {
        Title: "Teste"
    },
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule, MatToolbarModule]
        })
    ],
    docs: {
        description: {
            story: 'some story **markdown**'
        }
    },

})
