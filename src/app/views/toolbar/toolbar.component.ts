import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TvMazeApiService } from "../../models/services/tv-maze-api.service";
import { DisplayListComponent } from "../display-list/display-list.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  title: string = 'Tv Maze Api';
  search: string;

  constructor(private api: TvMazeApiService, private display: DisplayListComponent, private route: Router) { }

  searchBtn(search: string) : void {
    this.route.navigateByUrl('shows/' + this.search);
  }
}
