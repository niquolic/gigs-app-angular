import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
    document.cookie = `state=${state};`;

    const scope = 'user-read-private user-read-email';
    const redirectUri = this.redirectUri;
    const clientId = this.clientId;

    const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = spotifyAuthorizeUrl;
  }

  callback() {
    this.route.queryParams.subscribe(params => {
      if(params && params['code']){
        const cookieState = document.cookie.match(`(^|;) ?state=([^;]*)(;|$)`);
        const storedState = cookieState ? cookieState[2] : null;
        const code = params['code'];
        const state = params['state'];

        if (state === null || state !== storedState) {
          // Handle state mismatch error
          console.log('State mismatch error');
        } else {
          // Exchange code for access token
          const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
          });

          const body = new HttpParams()
            .set('code', code)
            .set('redirect_uri', this.redirectUri)
            .set('grant_type', 'authorization_code');

          this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers: headers })
            .subscribe((response: any) => {
              const accessToken = response.access_token;
              localStorage.setItem('spotifyToken', accessToken);
              this.router.navigate(['/dashboard']);
            }, error => {
              console.log(error);
            });
        }
      }
    });
  }
}
