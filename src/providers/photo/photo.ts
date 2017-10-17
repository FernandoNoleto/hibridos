import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import { Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


export class Foto{
    base64: string;
    id: number;
    posicao: any;
}



@Injectable()
export class PhotoProvider {

    fotos: Foto;    


    constructor (@Inject(FirebaseApp) fb: any, public alertCtrl: AlertController,
        public geolocation: Geolocation
    ) {
        this.fotos = new Foto();
    }

    uploadPhoto(captureDataUrl: string){
        let storageRef = firebase.storage().ref('/Photos/');
        const filename = Math.floor(Date.now() / 1000);
        const imageRef = storageRef.child(`images/${filename}.jpg`);
        imageRef.putString(captureDataUrl, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
            //informação da foto em base64
            this.fotos.base64 = captureDataUrl;
            //pegar nome do arquivo usando numeros aleatorios
            this.fotos.id = filename;
            //pegar posicao no mapa da foto
            this.geolocation.getCurrentPosition().then((position) => {
                this.fotos.posicao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            });

            this.alertaDeUpload();
        });

    }

    alertaDeUpload() {
        let alert = this.alertCtrl.create({
            title: 'Foto enviada com sucesso!!',
            subTitle: 'Imagem foi enviada para o firebase ',
            buttons: ['OK']
        });
        alert.present();
    }

    
}
