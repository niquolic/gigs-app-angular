import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGigsComponent {

  // Récupération de l'identifiant utilisateur stocké dans le localStorage
  userId = localStorage.getItem('userId');

  private urlAll = `${environment.apiUrl}/getGigsByUserId?userId=${this.userId}`;

  constructor(private http: HttpClient) { }

  getGigs() {
    // Appel de l'API
    return this.http.get(this.urlAll);
  }

  getGigById(id: any) {
    return this.http.get(`${environment.apiUrl}/getGigById?id=${id}`);
  }

}