import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';

@Injectable()
export class LocalizacaoProvider {

    localizacaoLat: any;
    localizacaoLng: any;

    constructor(
        private geolocation: Geolocation,
        private toastCtrl: ToastController
    ) {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.localizacaoLat = resp.coords.latitude;    
            this.localizacaoLng = resp.coords.longitude;
        }).catch((error) => {
            let toast = this.toastCtrl.create({message: error, duration: 3000});
            toast.present();
        });
    }


}
