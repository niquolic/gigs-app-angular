import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';
import { Router } from '@angular/router';
import { TokenService } from '../../services/tokenService/token.service';
import { environnement } from 'src/environnements/environnement';
import { count } from 'rxjs';

@Component({
  selector: 'app-edit-gig-form',
  templateUrl: './edit-gig-form.component.html',
  styleUrls: ['./edit-gig-form.component.scss']
})
export class EditGigFormComponent {
  id: any;
  gig: any;
  userId!: string;
  bandGig: string[] = []; 
  cityGig!: string;
  dateGig!: string;
  venueGig!: string;
  countryGig!: string;
  priceGig!: string;
  i: number = 0;
  newBands: string[] = [];

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
      console.log(this.gig);
    }, (error) => {
      console.log(error);
    });
    } else {
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
    const inputs = document.getElementsByName('bandDiv');
    const nbInputs = inputs.length;
    element.id = "bandInput"+nbInputs;
    element.placeholder = "Groupe/Artiste";
    const br = document.createElement("br");
    div?.appendChild(element);
    div?.appendChild(br);
    this.bandGig.push('');
    const newIndex = this.newBands.length;
    element.addEventListener('input', (e) => {
      const inputElement = e.target as HTMLInputElement;
      this.newBands[newIndex] = inputElement.value;
      console.log(this.newBands);
    });    
    document.getElementById('addBand')!.style.display = 'block';
  }

  deleteBand(i: number, event: Event){
    event.preventDefault();
    this.gig.bands.splice(i, 1);
  }

  onSubmitEditForm(event: any) {
    event.preventDefault();
    if(this.newBands.length > 0){ 
      for(let i = 0; i < this.newBands.length; i++){
        this.gig.bands.push(this.newBands[i]);
        console.log(this.gig.bands)
      }
    }
    const url = `${environnement.apiUrl}/editGig?userId=${this.userId}`;
    this.http.post(url, this.gig, {responseType: 'text'}).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  
}
