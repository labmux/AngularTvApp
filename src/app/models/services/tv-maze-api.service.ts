import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import { HttpClient } from "@angular/common/http";
import { Show } from "../show";

@Injectable({
  providedIn: 'root'
})
export class TvMazeApiService {
  private url: string = 'http://api.tvmaze.com/singlesearch/shows?q=';
  public createShow(show: Show) {}
  public getShows(url?: string) {
      return this.httpClient.get<Show[]>(`${this.url}`);
  }

  private extractData(res: Response) {
    const response = res;
    return response || {};
  }



  setUrl(show: string): void {
    this.url += show;
  }



  constructor(private http: HttpClient) { }
}
