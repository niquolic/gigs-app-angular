import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gigs',
  template: '<app-menu></app-menu><app-add-gigs-form></app-add-gigs-form>'
})
export class AddGigsComponent implements OnInit {

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      window.location.href = '/login';
    }

  }

}
