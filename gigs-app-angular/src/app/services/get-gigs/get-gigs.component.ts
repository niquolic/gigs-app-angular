import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetGigsComponent {

  // Récupération de l'identifiant utilisateur stocké dans le localStorage
  userId = localStorage.getItem('userId');

  private urlAll = "http://127.0.0.1:8080/getGigsByUserId?userId=" + this.userId;
  private urlId: any;

  constructor(private http: HttpClient) { }

  getGigs() {
    // Appel de l'API
    return this.http.get(this.urlAll);
  }

  getGigById(id: any) {
    this.urlId = "http://127.0.0.1:8080/getGigById?id=" + id;
    return this.http.get(this.urlId);
  }

}