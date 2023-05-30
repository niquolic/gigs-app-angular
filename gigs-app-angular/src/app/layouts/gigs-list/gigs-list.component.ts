import { Component, OnInit } from '@angular/core';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';

@Component({
  selector: 'app-gigs-list',
  templateUrl: './gigs-list.component.html',
  styleUrls: ['./gigs-list.component.scss']
})
export class GigsListComponent implements OnInit{

  // Initialisation de la propriété gigs
  gigs:any;

  constructor(private serviceGigs: GetGigsComponent) { }

  ngOnInit() {
    if(localStorage.getItem('token')) {
    // Appel de la méthode getGigs() du service
    this.serviceGigs.getGigs().subscribe(response => {this.gigs = response });
    console.log(this.gigs);
    }else{
      window.location.href = '/login';
    }
  }

  addGigs() {
    // Redirection vers la page d'ajout de concerts
    window.location.href = '/add-gigs';
  }

}
