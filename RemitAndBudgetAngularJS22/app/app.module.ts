import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
    imports: [BrowserModule,
             FormsModule,
             AppRoutingModule],
  declarations: [AppComponent,
                 HeroesComponent,
                 HeroDetailsComponent,
                 DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
