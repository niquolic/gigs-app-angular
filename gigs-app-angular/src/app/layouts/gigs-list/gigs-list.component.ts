import { Component, OnInit } from '@angular/core';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TokenService } from '../../services/tokenService/token.service';

interface JwtPayload {
  sub: string; // Propriété 'sub' pour le login
  userId: number; // Propriété 'userId' pour l'identifiant de l'utilisateur
  iat: number; // Propriété 'iat' pour la date d'émission du token
  exp: number; // Propriété 'exp' pour la date d'expiration du token
}

@Component({
  selector: 'app-gigs-list',
  templateUrl: './gigs-list.component.html',
  styleUrls: ['./gigs-list.component.scss']
})
export class GigsListComponent implements OnInit{

  // Initialisation de la propriété gigs
  gigs: any = [];
  showEmptyText: boolean = false;

  constructor(
    private serviceGigs: GetGigsComponent,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private tokenService: TokenService
    ) { }

  ngOnInit() {
    if (!this.tokenService.isTokenExpired()) {
      // Appel de la méthode getGigs() du service
      this.serviceGigs.getGigs().subscribe(response => {
        this.gigs = response;
        console.log(this.gigs); // Vérification des données reçues depuis le serveur
        if (this.gigs.length === 0) {
          this.showEmptyText = true;
        }
      },error => {
        console.log(error);
        this.showEmptyText = true;
      });
    } else {
      window.location.href = '/login';
    }
  }
  
  

  addGigs() {
    // Redirection vers la page d'ajout de concerts
    window.location.href = '/add-gigs';
  }

  deleteGig(id: any) {
    const apiUrl = "http://127.0.0.1:8080/deleteGig?userId="+localStorage.getItem('userId');
    this.http.post(apiUrl, id, {responseType: 'text'}).subscribe(
      (response) => {
        alert("Concert supprimé");
        window.location.reload();
      }, (error) => {
        console.log(error);
      }
    );
  }

  editGig(id: any) {
    window.location.href = '/edit-gig?id=' + id;
  }

}
