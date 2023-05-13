import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { GigsListComponent } from './layouts/gigs-list/gigs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GigsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
