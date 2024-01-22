import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotifyService/spotify.service';

@Component({
  selector: 'app-callback-spotify',
  templateUrl: './callback-spotify.component.html',
  styleUrls: ['./callback-spotify.component.scss']
})
export class CallbackSpotifyComponent implements OnInit {

  private callbackExecuted = false;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    if(!this.callbackExecuted) {
      this.spotifyService.callback();
      this.callbackExecuted = true;
    }
  }

}
