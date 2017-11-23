import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapaPage } from '../pages/mapa/mapa';
import { ListaPage } from '../pages/listadecompras/listadecompras';
import { AutenticacaoPage } from '../pages/autenticacao/autenticacao';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'MINHA CONTA', component: AutenticacaoPage },
        { title: 'HOME', component: HomePage },
        { title: 'MAPA', component: MapaPage },
        { title: 'LISTA DE COMPRAS', component: ListaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(true);
      //this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#cc6908');
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
