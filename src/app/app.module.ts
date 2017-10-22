//Todas os plugins adicionados
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeGeocoder,
         NativeGeocoderReverseResult,
         NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

//Paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { ListaPage } from '../pages/listadecompras/listadecompras';
import { ListassalvasPage } from '../pages/listassalvas/listassalvas';
import { AutenticacaoPage } from '../pages/autenticacao/autenticacao';
import { CriarContaPage } from '../pages/criarconta/criarconta';
import { LoginPage } from '../pages/login/login';
import { PromocaoPage } from '../pages/promocao/promocao';

//Providers
import { PhotoProvider } from '../providers/photo/photo';
import { AuthProvider } from '../providers/auth/auth';
import { BarcodeProvider } from '../providers/barcode/barcode';

  // Initialize Firebase
var config = {
      apiKey: "AIzaSyDgf-dUG_gcr608Jpm1m1p_zs2vzP2JizY",
      authDomain: "previa-1.firebaseapp.com",
      databaseURL: "https://previa-1.firebaseio.com",
      projectId: "previa-1",
      storageBucket: "previa-1.appspot.com",
      messagingSenderId: "816587470633"
};
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage,
    ListassalvasPage,
    AutenticacaoPage,
    CriarContaPage,
    LoginPage,
    PromocaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    ListaPage,
    ListassalvasPage,
    AutenticacaoPage,
    CriarContaPage,
    LoginPage,
    PromocaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    Facebook,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    PhotoProvider,
    AuthProvider,
    BarcodeProvider
  ]
})
export class AppModule {}

