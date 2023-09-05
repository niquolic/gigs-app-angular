import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';

@Component({
  selector: 'app-callback-spotify',
  templateUrl: './callback-spotify.component.html',
  styleUrls: ['./callback-spotify.component.scss']
})
export class CallbackSpotifyComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.spotifyService.callback();
  }

}
