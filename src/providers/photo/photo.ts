import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'rxjs/add/operator/map';
import { FirebaseApp } from 'angularfire2';
import { Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';



export class Foto{
    nome: string;
    url: string;
    local: any;
}



@Injectable()
export class PhotoProvider {

    foto: Foto;
    lista: FirebaseListObservable<any>;

    constructor (
        private alertCtrl: AlertController,
        private geolocation: Geolocation,
        public db: AngularFireDatabase,
        private toastCtrl: ToastController
    ) {
        try {
            this.lista = db.list('/caminho_das_imagens/');         
        } catch (error) {
            console.log(error);
        }
        this.foto = new Foto;
    }

    uploadPhoto(captureDataUrl: string){
        

        let storageRef = firebase.storage().ref('/Users/');
        const filename = Math.floor(Date.now() / 1000);
        let uploadTask = storageRef.child(`${filename}.jpg`);
        uploadTask.putString(captureDataUrl, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot) => {
            this.foto.nome = filename.toString();
            this.foto.local = "ainda a definir";
            this.foto.url = snapshot.downloadURL;
            this.lista.push(this.foto);
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            let toast = this.toastCtrl.create({
                message: progress.toString() + '% done',
                showCloseButton: true
            });
            toast.present();
            this.foto = new Foto;    
        })
        .catch((erro) => {
            let toast = this.toastCtrl.create({
                message: erro.message,
                showCloseButton: true
            });
            toast.present();
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

    /*
    armazenarCaminhoDaFoto(nome: string){
        let storageRef = firebase.storage().ref('/Users/');
        let caminho = storageRef.child('images/'+nome);
        caminho.getDownloadURL().then(url => {
           console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
        });
    }
    */
    
}
