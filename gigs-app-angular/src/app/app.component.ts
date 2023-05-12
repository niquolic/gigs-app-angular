import { Component } from '@angular/core';
import { MenuComponent } from './layouts/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MenuComponent]
})
export class AppComponent {
  title = 'gigs-app-angular';
}
