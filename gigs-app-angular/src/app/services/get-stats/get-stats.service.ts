import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStatsService {

  userId = localStorage.getItem('userId');

  constructor(private http : HttpClient) { }

  getBandsStats(){
    return this.http.get('http://127.0.0.1:8080/getStatsOfUser?userId='+this.userId);
  }

  getTotalNumberOfGigs(){
    return this.http.get('http://127.0.0.1:8080/getTotalNumberOfGigs?userId='+this.userId);
  }

  getTotalNumberOfGigsThisYear(){
    return this.http.get('http://127.0.0.1:8080/getTotalNumberOfGigsThisYear?userId='+this.userId);
  }

  getCountryStatsOfUser(){
    return this.http.get('http://127.0.0.1:8080/getCountryStatsOfUser?userId='+this.userId);
  }

}
