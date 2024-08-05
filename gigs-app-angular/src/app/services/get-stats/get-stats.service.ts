import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environnement } from 'src/environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class GetStatsService {

  userId = localStorage.getItem('userId');

  constructor(private http : HttpClient) { }

  getBandsStats(){
    return this.http.get(`${environnement.apiUrl}/getStatsOfUser?userId=${this.userId}`);
  }

  getTotalNumberOfGigs(){
    return this.http.get(`${environnement.apiUrl}/getTotalNumberOfGigs?userId=${this.userId}`);
  }

  getTotalNumberOfGigsThisYear(){
    return this.http.get(`${environnement.apiUrl}/getTotalNumberOfGigsThisYear?userId=${this.userId}`);
  }

  getCountryStatsOfUser(){
    return this.http.get(`${environnement.apiUrl}/getCountryStatsOfUser?userId=${this.userId}`);
  }

  getTotalPrice(){
    return this.http.get(`${environnement.apiUrl}/getTotalPrice?userId=${this.userId}`);
  }

  getPriceThisYear(){
    return this.http.get(`${environnement.apiUrl}/getPriceThisYear?userId=${this.userId}`);
  }

}
