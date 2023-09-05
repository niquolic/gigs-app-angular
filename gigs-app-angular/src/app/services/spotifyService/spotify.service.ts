import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  private stateKey = 'spotify_auth_state';
  private clientId = '431deab51b714f9982118d51a0ddb06f';
  private redirectUri = 'http://localhost:4200/callback';
  private clientSecret = '394cdbca948e4a66be923afcf1824b4f';

  generateRandomString(length: number) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  login() {
    const state = this.generateRandomString(16);
    document.cookie = `stateKey=${state};`;
    
    const scope = 'user-read-private user-read-email';
    const redirectUri = this.redirectUri;
    const clientId = this.clientId;

    const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;
    
    window.location.href = spotifyAuthorizeUrl;
  }
  
  callback() {
  }

}
