import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayListComponent} from "./views/display-list/display-list.component";
import {DisplaySeasonsComponent} from "./views/display-seasons/display-seasons.component";

const routes: Routes = [
    // { path:'shows', component: DisplayListComponent },
    { path: 'shows/:search', component: DisplayListComponent},
    { path: 'seasons', component: DisplaySeasonsComponent},
    { path: 'seasons/:id', component: DisplaySeasonsComponent}

    // { path: 'displayList', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
