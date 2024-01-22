import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environnement } from 'src/environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class GetGigsComponent {

  // Récupération de l'identifiant utilisateur stocké dans le localStorage
  userId = localStorage.getItem('userId');

  private urlAll = `${environnement.apiUrl}/getGigsByUserId?userId=${this.userId}`;

  constructor(private http: HttpClient) { }

  getGigs() {
    // Appel de l'API
    return this.http.get(this.urlAll);
  }

  getGigById(id: any) {
    return this.http.get(`${environnement.apiUrl}/getGigById?id=${id}`);
  }

}