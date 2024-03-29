import { Component, OnInit } from '@angular/core';
import { GetGigsComponent } from '../../services/get-gigs/get-gigs.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TokenService } from '../../services/tokenService/token.service';
import { SpotifyService } from '../../services/spotifyService/spotify.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { environnement } from 'src/environnements/environnement';

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
  isLoggedToSpotify: boolean = true;
  spotifyImage: string = '/assets/img/spotify.png';
  //accessTokenGoogle = this.oauthService.getAccessToken()

  constructor(
    private serviceGigs: GetGigsComponent,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private tokenService: TokenService,
    private spotifyService: SpotifyService,
    //private oauthService: OAuthService
    ) { }

  ngOnInit() {
    if(localStorage.getItem('spotifyToken')) {
      this.isLoggedToSpotify = true;
    }
    if(!localStorage.getItem('spotifyToken')) {
      this.isLoggedToSpotify = false;
    }
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
      this.router.navigate(['/login']);;
    }
  }

  // loginWithGoogle() {
  //   console.log('test')
  //   // Initialisez le processus d'authentification OAuth2 avec Google
  //   this.oauthService.initLoginFlow();
  // }
  
  loginToSpotify() {
    this.spotifyService.login();
  }

  addGigs() {
    // Redirection vers la page d'ajout de concerts
    window.location.href = '/add-gigs';
    //localStorage.setItem('googleClientID', '743232516922-48r0qj9tcv7acouo8d0mhklp5ab5itcn.apps.googleusercontent.com');
        //localStorage.setItem('googleSecretID', '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');
  }

  deleteGig(id: any) {
    const apiUrl = `${environnement.apiUrl}/deleteGig?userId=${localStorage.getItem('userId')}`;
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
    //console.log('accessTokenGoogle : ' + this.accessTokenGoogle);
    window.location.href = '/edit-gig?id=' + id;
  }

}
