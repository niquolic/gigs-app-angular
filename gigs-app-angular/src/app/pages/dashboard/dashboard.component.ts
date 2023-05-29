import { Component, OnInit } from '@angular/core';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';

@Component({
  selector: 'app-dashboard',
  template: `<app-menu></app-menu><app-gigs-list></app-gigs-list>`
})
export class DashboardComponent implements OnInit {
  // Initialisation de la propriété gigs
  gigs:any;

  constructor(private serviceGigs: GetGigsComponent) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
    // Appel de la méthode getGigs() du service
    this.serviceGigs.getGigs().subscribe(response => {this.gigs = response });
    }else{
      window.location.href = '/login';
    }
  }

}
