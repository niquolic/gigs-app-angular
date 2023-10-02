import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.scss']
})
export class StatsComponentComponent implements OnInit {

  ngOnInit() {
    console.log("salut");
  }

}
