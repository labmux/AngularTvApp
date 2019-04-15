import {Component} from '@angular/core';
import { TvMazeApiService } from "../../models/services/tv-maze-api.service";
import { DisplayListComponent } from "../display-list/display-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  name: string;
  search: string;   //ngModel of our search bar

  constructor(private api: TvMazeApiService, private display: DisplayListComponent, private router: Router) { }

    /**
     * On search, save search parameter and redirect to displayList component
     * @param {string} search
     */
  searchBtn(search: string) : void {

    this.router.navigateByUrl('shows/' + this.search);
  }
}
