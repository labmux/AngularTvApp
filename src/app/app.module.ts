import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from "@angular/forms";

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
    // tables
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";


// Views
import { ToolbarComponent} from './views/toolbar/toolbar.component';
import { DisplayListComponent } from './views/display-list/display-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DisplayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
      MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
