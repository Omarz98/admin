import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from '../services/notes.service';
import { DetailPage } from '../pages/detail/detail';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDt_F6NkptALVOBEj9SXMR3vEDKGLhDzL8",
  authDomain: "notas-178d6.firebaseapp.com",
  databaseURL: "https://notas-178d6.firebaseio.com",
  storageBucket: "notas-178d6.appspot.com",
  messagingSenderId: '437981836233'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService
  ]
})
export class AppModule {}
