
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes =
        [{
            path: 'detail/:id',
            component: HeroDetailsComponent
        },
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'heroes',
            component: HeroesComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        }];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]

})
export class AppRoutingModule
{
}