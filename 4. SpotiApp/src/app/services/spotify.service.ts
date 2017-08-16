import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas(termino:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQACBfUfcNoUwUYAAc2goBwa2pc6YLevk1rnRGFVZ6wGxWEgfvcq5w7sCWjfLSRXuqP4k_npU4U8T-iqRN7QnQ')

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
            .map( res => {
                //console.log(res);
                this.artistas = res.json().artists.items;
                console.log(this.artistas);
                //return res.json().artists.items;
            })
  }


  getArtista(id:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBH21wvJkm7pMP5umvNd_4ESBZDdlrwap9BjD5lFBIvB7Z2RPbpo31ccylVpTN7HhLaV1jIs3PrA4qtajfVDw')

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
            .map( res => {
                console.log(res.json());
                return res.json();
            })
  }

  getTop(id:string){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQBH21wvJkm7pMP5umvNd_4ESBZDdlrwap9BjD5lFBIvB7Z2RPbpo31ccylVpTN7HhLaV1jIs3PrA4qtajfVDw')

    let query = `/${id}/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url, { headers } )
            .map( res => {
                console.log(res.json().tracks);
                return res.json().tracks;
            })
  }

}
/*{
    "access_token": "BQACBfUfcNoUwUYAAc2goBwa2pc6YLevk1rnRGFVZ6wGxWEgfvcq5w7sCWjfLSRXuqP4k_npU4U8T-iqRN7QnQ",
    "token_type": "Bearer",
    "expires_in": 3600
}*/
