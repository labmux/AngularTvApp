import {Component, Input, OnInit} from '@angular/core';
import {TvMazeApiService} from "../../models/services/tv-maze-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {

  shows: any;       // holds array of objects of all the shows from search result
  search: string;   // holds users search

  constructor(private api: TvMazeApiService, private route: ActivatedRoute, private router: Router) {}

    /**
     * On Init get the users desires search, from toolbar search bar,
     * then get shows
     */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
          this.search = params.get('search');
          this.getShows();
      });
  }

    /**
     * Redirects to display-seasons component and saves show id
     * @param id
     */
  details(id): void {
      this.router.navigateByUrl('seasons/' + id);
  }

    /**
     * get show array of objects
     */
  getShows(): void {
      this.api.getShows(this.search).subscribe(results => {
          this.shows = results;
      });
  }





}
