import { Component, OnInit, inject } from '@angular/core';
import { GetStatsService } from '../../services/get-stats/get-stats.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.scss']
})
export class StatsComponentComponent implements OnInit {

  loading : boolean = true;
  bandsStats? : any;
  emptyText : boolean;
  totalNumberOfGigs? : any;
  totalNumberOfGigsThisYear? : any;
  countryStats? : any;
  totalPrice? : any;
  priceThisYear? : any;

  constructor(private serviceStats : GetStatsService) {
    this.emptyText = false;
    this.totalNumberOfGigsThisYear = 0;
    this.totalNumberOfGigs = 0;
    this.totalPrice = 0;
    this.priceThisYear = 0;
  }

  private router: Router = inject(Router);

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);;
    }else{
      this.serviceStats.getBandsStats().subscribe(response => {
        this.bandsStats = response;
        this.loading = false;
        if(this.bandsStats.length == 0){
          this.emptyText = true;
        }
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      });

      this.serviceStats.getTotalNumberOfGigs().subscribe(response => {
        this.totalNumberOfGigs = response;
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true
        this.loading = false;
      });

      this.serviceStats.getTotalNumberOfGigsThisYear().subscribe(response => {
        if(response != null){
          this.totalNumberOfGigsThisYear = response;
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })

      this.serviceStats.getCountryStatsOfUser().subscribe(response => {
        this.countryStats = response;
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })

      this.serviceStats.getTotalPrice().subscribe(response => {
        this.totalPrice = response;
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })

      this.serviceStats.getPriceThisYear().subscribe(response => {
        this.priceThisYear = response;
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })
    }
  }

}
