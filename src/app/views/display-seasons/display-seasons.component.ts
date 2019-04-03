import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TvMazeApiService} from "../../models/services/tv-maze-api.service";

@Component({
  selector: 'app-display-seasons',
  templateUrl: './display-seasons.component.html',
  styleUrls: ['./display-seasons.component.scss']
})
export class DisplaySeasonsComponent implements OnInit {
  // parameters to hold all seasons, episodes and show id
  seasons: any;
  episodes: any;
  id: string;

  // information required for table
  displayedColumns = ['number', 'name', 'airdate'];

  constructor(private api: TvMazeApiService, private route: ActivatedRoute) { }

    /**
     * OnInit get show id, and with it
     * initialize seasons and episodes parameters
     */
  ngOnInit() {
      this.route.paramMap.subscribe(params => {
          this.id = params.get('id');
          this.getSeasons();
          this.getEpisodes();
      });

  }

    /**
     * Initializes seasons
     */
  getSeasons(): void {
        this.api.getSeasons(this.id).subscribe(results => {
            this.seasons = results;
        });
    }

    /**
     * Initializes episodes
     */
    getEpisodes(): void {
        this.api.getEpisodes(this.id).subscribe(results => {
            this.episodes = results;

            // // TODO: algorithm to create array of episodes by seasons
            // for (let i = 1; i <= this.seasons.length; i++) {
            //     let season = 1;
            //     while (this.episodes.season == i) {
            //         this.dataSource[i].episode = this.episodes[i];
            //     }
            // }
        });
    }

}
