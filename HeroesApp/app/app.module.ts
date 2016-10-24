import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [BrowserModule,
              FormsModule,
              HttpModule,
              InMemoryWebApiModule.forRoot(InMemoryDataService),
              AppRoutingModule],
  declarations: [AppComponent,
                 HeroesComponent,
                 HeroDetailsComponent,
                 DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
