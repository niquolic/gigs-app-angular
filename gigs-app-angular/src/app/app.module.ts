import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { GigsListComponent } from './components/gigs-list/gigs-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddGigsFormComponent } from './components/add-gigs-form/add-gigs-form.component';
import { AddGigsComponent } from './pages/add-gigs/add-gigs.component';
import { EditGigFormComponent } from './components/edit-gig-form/edit-gig-form.component';
import { EditGigComponent } from './pages/edit-gig/edit-gig.component';
import { CallbackSpotifyComponent } from './components/callback-spotify/callback-spotify.component';
import { StatsComponentComponent } from './components/stats-component/stats-component.component';
import { StatsGigsComponent } from './pages/stats-gigs/stats-gigs.component';
import { OAuthModule } from 'angular-oauth2-oidc';;


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
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://api.example.com'],
        sendAccessToken: true
      },})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
