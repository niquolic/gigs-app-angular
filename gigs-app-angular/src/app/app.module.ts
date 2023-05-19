import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { GigsListComponent } from './layouts/gigs-list/gigs-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './layouts/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GigsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
