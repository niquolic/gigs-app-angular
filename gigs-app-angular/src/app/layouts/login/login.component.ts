import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

interface JwtPayload {
  sub: string; // Propriété 'sub' pour le login
  userId: number; // Propriété 'userId' pour l'identifiant de l'utilisateur
  iat: number; // Propriété 'iat' pour la date d'émission du token
  exp: number; // Propriété 'exp' pour la date d'expiration du token
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  // Déclaration des propriétés
  userLogin!: string;
  userPassword!: string;
  private tokenExpirationTimer: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(event: Event) {
    event.preventDefault();

    // Définition de l'URL de l'API
    const apiUrl = 'http://127.0.0.1:8080/getUserByLoginAndPassword';
    // Définition des paramètres de la requête
    const params = new HttpParams().set('login', this.userLogin).set('password', this.userPassword);

    // Envoi de la requête
    this.http.get(apiUrl, { params, responseType: 'text'  }).subscribe(
      (response) => {
        // Récupération du token
        const decodedToken: JwtPayload = jwt_decode(response);
        // Récupération de l'identifiant utilisateur
        const userId: number = decodedToken.userId;
        // Enregistrement du token et de l'identifiant utilisateur dans le localStorage pour y avoir accès dans les autres composants
        localStorage.setItem('token', response);
        localStorage.setItem('userId', userId.toString());

        // Récupération de la date d'expiration du token
        const expirationDate = new Date(decodedToken.exp + 1000);
        const currentTime = new Date();
        const expiresIn = expirationDate.getTime() - currentTime.getTime();
        // Suppression automatique
        this.tokenExpirationTimer = setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userId');
        }, expiresIn)
        // Redirection vers la page d'accueil
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Gestion des erreurs
        console.log(error);
      }
    );
  }

}