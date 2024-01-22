import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

interface JwtPayload {
  sub: string;
  userId: number;
  iat: number;
  exp: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  userLogin!: string;
  userPassword!: string;
  private tokenExpirationTimer: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(event: Event) {
    event.preventDefault();

    const apiUrl = 'http://127.0.0.1:8080/getUserByLoginAndPassword';
    const params = new HttpParams().set('login', this.userLogin).set('password', this.userPassword);

    this.http.get(apiUrl, { params, responseType: 'text' }).subscribe(
      (response) => {
        const decodedToken: JwtPayload = jwt_decode(response);
        const userId: number = decodedToken.userId;

        // Enregistrement du token et de l'identifiant utilisateur dans le localStorage
        localStorage.setItem('token', response);
        localStorage.setItem('userId', userId.toString());

        // Récupération de la date d'expiration du token
        const expirationDate = new Date(decodedToken.exp * 1000);
        const currentTime = new Date();
        const expiresIn = expirationDate.getTime() - currentTime.getTime();

        // Suppression automatique
        this.tokenExpirationTimer = setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        }, expiresIn);

        // Redirection vers la page d'accueil
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Gestion des erreurs d'authentification
        console.log(error);
      }
    );
  }
}
