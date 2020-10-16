import { HomeComponent } from '../home.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppModule } from '../../../app.module'



storiesOf('Card Simples', module)
    .addDecorator(moduleMetadata({
        imports: [AppModule]
    })).add('Card com um Button', () => ({
        component: HomeComponent,
        moduleMetadata: {
            imports: [MatCardModule, MatButtonModule]
        }
    }));
