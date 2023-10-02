import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { GigsListComponent } from './layouts/gigs-list/gigs-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './layouts/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGigsFormComponent } from './layouts/add-gigs-form/add-gigs-form.component';
import { AddGigsComponent } from './pages/add-gigs/add-gigs.component';
import { EditGigFormComponent } from './layouts/edit-gig-form/edit-gig-form.component';
import { EditGigComponent } from './pages/edit-gig/edit-gig.component';
import { CallbackSpotifyComponent } from './layouts/callback-spotify/callback-spotify.component';
import { StatsComponentComponent } from './layouts/stats-component/stats-component.component';
import { StatsGigsComponent } from './pages/stats-gigs/stats-gigs.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GigsListComponent,
    LoginComponent,
    DashboardComponent,
    AddGigsFormComponent,
    AddGigsComponent,
    EditGigFormComponent,
    EditGigComponent,
    CallbackSpotifyComponent,
    StatsComponentComponent,
    StatsGigsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
