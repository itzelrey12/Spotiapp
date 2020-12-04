import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
 
   getNewReleases(){
 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQByroA9Xu9Gi3RcrEEVB8wHj_eqloLqmRSgnJ6Fdm8K4A7HBc3_PGSHDItP5DJ3LrL6_QW5xbMkd4oEduA'
    })
 
     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
        
 
   }
}
