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

  constructor(private serviceStats : GetStatsService) {
    this.emptyText = false;
    this.totalNumberOfGigsThisYear = 0;
    this.totalNumberOfGigs = 0;
  }

  private router: Router = inject(Router);

  ngOnInit() {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);;
    }else{
      this.serviceStats.getBandsStats().subscribe(response => {
        this.bandsStats = response;
        console.log(this.bandsStats);
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
        console.log(this.totalNumberOfGigs);
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
        console.log(this.totalNumberOfGigsThisYear);
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })

      this.serviceStats.getCountryStatsOfUser().subscribe(response => {
        this.countryStats = response;
        console.log(this.countryStats);
        this.loading = false;
      }, error => {
        console.log(error);
        this.emptyText = true;
        this.loading = false;
      })
    }
  }

}
