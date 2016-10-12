import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';

import { AngularFireModule } from 'angularfire2';
import { TabRowComponent } from './tab-row/tab-row.component';
export const firebaseConfig = {
  apiKey: "AIzaSyA4Ut5x488eODNFmnlisGKRSNYhuoHJ6Pw",
  authDomain: "mcu-tiers.firebaseapp.com",
  databaseURL: "https://mcu-tiers.firebaseio.com",
  storageBucket: "mcu-tiers.appspot.com",
  messagingSenderId: "236578939074"
};

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TabRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
