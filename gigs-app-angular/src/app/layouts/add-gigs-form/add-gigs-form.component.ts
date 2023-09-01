import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../../services/tokenService/token.service';

@Component({
  selector: 'app-add-gigs-form',
  templateUrl: './add-gigs-form.component.html',
  styleUrls: ['./add-gigs-form.component.scss']
})
export class AddGigsFormComponent implements OnInit {

  userId!: string;
  bandGig: string[] = [];
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;
  i: number = 0;

  constructor(
    private router: Router,
    private http: HttpClient,
    private tokenService: TokenService
  ) { };

  ngOnInit() {
    if(this.tokenService.isTokenExpired()) {
      window.location.href = '/login';
    }
  }

  addBand(event: Event){
    event.preventDefault();
    this.i = this.i + 1;
    const div = document.getElementById('addBand')
    const element = document.createElement("input");
    element.type = "text";
    element.style.marginTop = "10px";
    element.style.height = "30px";
    element.style.width = "350px";
    element.name = "bandInput";
    element.placeholder = "Groupe/Artiste";
    const br = document.createElement("br");
    div?.appendChild(element);
    div?.appendChild(br);
    this.bandGig.push('');
    element.addEventListener('input', (e) => {
      const inputElement = e.target as HTMLInputElement;
      this.bandGig[this.i] = inputElement.value;
    });
    document.getElementById('addBand')!.style.display = 'block';
  }

  onSubmitAddForm(event: Event){
    event.preventDefault();
    const gigData = {
      userId: localStorage.getItem('userId'),
      bands: this.bandGig,
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
