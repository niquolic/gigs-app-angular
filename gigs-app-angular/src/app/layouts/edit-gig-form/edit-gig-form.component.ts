import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';

@Component({
  selector: 'app-edit-gig-form',
  templateUrl: './edit-gig-form.component.html',
  styleUrls: ['./edit-gig-form.component.scss']
})
export class EditGigFormComponent {
  id: any;
  gig: any;
  userId!: string;
  bandGig!: string;
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;

  constructor(private serviceGigs: GetGigsComponent,private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    // Récupération de l'id du concert à modifier
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.serviceGigs.getGigById(this.id).subscribe((response) => {
      this.gig = response;
    }, (error) => {
      console.log(error);
    });
  }

  onSubmitEditForm(event: any) {
    event.preventDefault();
  }

}
