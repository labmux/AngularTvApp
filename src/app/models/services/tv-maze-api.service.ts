import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TvMazeApiService {
    showsUrl: string = 'http://api.tvmaze.com/search/shows?q=';     // basic search url
    url: string = 'http://api.tvmaze.com/shows/';                   // url to bring up seasons and episodes
    show: any;

  constructor(private http: HttpClient) {

  }

    /**
     * Returns all shows corresponding to search
     * @param {string} search
     * @returns {Observable<any>}
     */
  public getShows(search: string): Observable<any> {
      if (search) {
          return this.http.get(this.showsUrl + search);
      }
  }

    /**
     * Returns seasons of desired show id
     * @param {string} id
     * @returns {Observable<any>}
     */
  public getSeasons(id: string): Observable<any> {
      if (id) {
          return this.http.get(this.url + id + '/seasons');
      }
  }

    /**
     * Returns episodes of desired show id
     * @param {string} search
     * @returns {Observable<any>}
     */
  public getEpisodes(search: string): Observable<any> {
        if (search) {
            return this.http.get(this.url + search + '/episodes');
        }
    }






}
