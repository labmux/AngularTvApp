import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayListComponent} from "./views/display-list/display-list.component";
import {DisplaySeasonsComponent} from "./views/display-seasons/display-seasons.component";

const routes: Routes = [

    { path: 'shows/:search', component: DisplayListComponent},  //param to keep track of shows
    { path: 'seasons', component: DisplaySeasonsComponent},
    { path: 'seasons/:id', component: DisplaySeasonsComponent}  //param to keep trach of seasons and episodes
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
