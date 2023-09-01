import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';
import { Router } from '@angular/router';
import { TokenService } from '../../services/tokenService/token.service';

@Component({
  selector: 'app-edit-gig-form',
  templateUrl: './edit-gig-form.component.html',
  styleUrls: ['./edit-gig-form.component.scss']
})
export class EditGigFormComponent {
  id: any;
  gig: any;
  userId!: string;
  bandGig!: string[]; 
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;

  constructor(
    private serviceGigs: GetGigsComponent,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    if (!this.tokenService.isTokenExpired()) {
    // Récupération de l'id du concert à modifier
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.serviceGigs.getGigById(this.id).subscribe((response) => {
      this.gig = response;
      console.log(this.gig)
    }, (error) => {
      console.log(error);
    });
    } else {
      window.location.href = '/login';
    }
  }

  onSubmitEditForm(event: any) {
    event.preventDefault();
    const url = "http://127.0.0.1:8080/editGig";
    this.http.post(url, this.gig, {responseType: 'text'}).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
