// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule, MatInputModule, MatListModule, MatTooltipModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
    // tables
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Views
import { ToolbarComponent} from './views/toolbar/toolbar.component';
import { DisplayListComponent } from './views/display-list/display-list.component';
import { DisplaySeasonsComponent } from './views/display-seasons/display-seasons.component';

// Service
import { TvMazeApiService } from "./models/services/tv-maze-api.service";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DisplayListComponent,
    DisplaySeasonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule
  ],
  exports: [
    MatTableModule
  ],
  providers: [TvMazeApiService, DisplayListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
