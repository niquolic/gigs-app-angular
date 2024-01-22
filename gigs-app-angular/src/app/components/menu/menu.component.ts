import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  currentRoute: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

}
