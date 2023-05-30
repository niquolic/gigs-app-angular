import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gigs-form',
  templateUrl: './add-gigs-form.component.html',
  styleUrls: ['./add-gigs-form.component.scss']
})
export class AddGigsFormComponent implements OnInit {

  bandGig!: string;
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }

}
