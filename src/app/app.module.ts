import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBZMEmjfS8YYbzEak2AX-x7yafFoBEmSfQ",
  authDomain: "chatapper-bedd7.firebaseapp.com",
  databaseURL: "https://chatapper-bedd7.firebaseio.com",
  storageBucket: "chatapper-bedd7.appspot.com",
  messagingSenderId: "576566423365"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
