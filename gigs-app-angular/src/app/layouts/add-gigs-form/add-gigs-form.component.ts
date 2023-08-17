import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-gigs-form',
  templateUrl: './add-gigs-form.component.html',
  styleUrls: ['./add-gigs-form.component.scss']
})
export class AddGigsFormComponent implements OnInit {

  userId!: string;
  bandGig!: string;
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;

  constructor(private router: Router, private http: HttpClient) { };

  ngOnInit() {
    if(!localStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }

  onSubmitAddForm(event: Event){
    event.preventDefault();
    const gigData = {
      userId: localStorage.getItem('userId'),
      band: this.bandGig,
      city: this.cityGig,
      date: this.dateGig,
      venue: this.venueGig,
      country: this.countryGig
    };
    console.log(gigData);

    const apiUrl = "http://127.0.0.1:8080/addGigToList?userId="+localStorage.getItem('userId');

    this.http.post(apiUrl, gigData).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
