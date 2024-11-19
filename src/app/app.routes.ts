import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:"Home"
    },
    {
        path:'recipe/:id',
        component:DetailsComponent,
        title:"Details"
    },
    {
        path:'add',
        component:AddComponent,
        title:"Add recipe"
    }
];
