import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<app-menu></app-menu><app-gigs-list></app-gigs-list>`
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      window.location.href = '/login';
    }

  }

}
