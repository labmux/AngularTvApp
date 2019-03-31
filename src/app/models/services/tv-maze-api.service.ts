import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Show } from "../show";
import { map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TvMazeApiService {
  // private searchUrl: string = 'http://api.tvmaze.com/search/shows?q=';
  // private url: string = 'http://api.tvmaze.com/shows/1/episodes';
    showsUrl: string = 'http://api.tvmaze.com/search/shows?q=';
    url: string = 'http://api.tvmaze.com/shows/'
    show: any;

  constructor(private http: HttpClient) {

  }


  public getShows(search: string): Observable<any> {
      if (search) {
          console.log(this.showsUrl + search);
          return this.http.get(this.showsUrl + search);
      }
  }

  public getSeasons(id: string): Observable<any> {
      if (id) {
          return this.http.get(this.url + id + '/seasons');
      }
  }

    public getEpisodes(search: string): Observable<any> {
        if (search) {
            return this.http.get(this.url + search + '/episodes');
        }
    }

}
