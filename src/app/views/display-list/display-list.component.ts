import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../../models/show";
import {TvMazeApiService} from "../../models/services/tv-maze-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit {


  displayedColumns;

  shows: any;
  search: string;
  word:string = 'TV';
  constructor(private api: TvMazeApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // let search: string = this.toolbar.getSearch();


      this.route.paramMap.subscribe(params => {
          this.search = params.get('search');
          this.getShows();
      });


  }


  details(id): void {
      this.router.navigateByUrl('seasons/' + id);
  }

  getShows(): void {
      this.api.getShows(this.search).subscribe(results => {
          this.shows = results;
      });
  }





}
