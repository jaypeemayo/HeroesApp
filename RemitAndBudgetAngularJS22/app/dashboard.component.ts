import { Component } from '@angular/core';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: "my-dashboard",
    templateUrl: "dashboard.component.html",
    providers: [HeroService]
    
    

})
export class DashboardComponent {

    heroes: Hero[];
    constructor(private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void
    {
        this.heroService.getHeroesSlowly().then((heroes) => { this.heroes = heroes }, (error) => { alert("error on retrieving heroes") });
    }

    gotoDetail(hero: Hero): void
    {
        let link = ['/detail', hero.id]
        this.router.navigate(link);
    }

}