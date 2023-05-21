import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin!: string;
  userPassword!: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(event: Event) {
    event.preventDefault;
    console.log(this.userLogin,this.userPassword);

    const apiUrl = 'http://127.0.0.1:8080/getUserByLoginAndPassword';
    const params = new HttpParams().set('login', this.userLogin).set('password', this.userPassword);

    this.http.get(apiUrl, { params, responseType: 'text'  }).subscribe(
      (response) => {
        // Traitement de la réponse du backend
        console.log('a')
      },
      (error) => {
        // Gestion des erreurs
        console.log(error)
      }
    );
  }

}
