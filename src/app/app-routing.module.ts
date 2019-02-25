import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen';
import { CommonModule } from '@angular/common';
import { FInputComponent } from './components/input/f-input';
import { FNavbarComponent } from './components/navbar/f-navbar';
import { FSelectComponent } from './components/f-select/f-select';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeScreenComponent,
    },
    {
        path: 'f-input',
        component: FInputComponent
    },
    {
        path: 'f-navbar',
        component: FNavbarComponent
    },
    {
        path: 'f-select',
        component: FSelectComponent
    },
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        HomeScreenComponent,
    ]
})
export class AppRoutingModule {}