import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetStatsService {

  userId = localStorage.getItem('userId');

  constructor(private http : HttpClient) { }

  getBandsStats(){
    return this.http.get(`${environment.apiUrl}/getStatsOfUser?userId=${this.userId}`);
  }

  getTotalNumberOfGigs(){
    return this.http.get(`${environment.apiUrl}/getTotalNumberOfGigs?userId=${this.userId}`);
  }

  getTotalNumberOfGigsThisYear(){
    return this.http.get(`${environment.apiUrl}/getTotalNumberOfGigsThisYear?userId=${this.userId}`);
  }

  getCountryStatsOfUser(){
    return this.http.get(`${environment.apiUrl}/getCountryStatsOfUser?userId=${this.userId}`);
  }

  getTotalPrice(){
    return this.http.get(`${environment.apiUrl}/getTotalPrice?userId=${this.userId}`);
  }

  getPriceThisYear(){
    return this.http.get(`${environment.apiUrl}/getPriceThisYear?userId=${this.userId}`);
  }

}
