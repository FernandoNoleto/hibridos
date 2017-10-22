import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PhotoProvider } from '../../providers/photo/photo';
//import { FirebaseApp } from 'angularfire2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodeProvider } from '../../providers/barcode/barcode';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { ToastController } from 'ionic-angular';



@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

    public base64Image: string;
    lista: FirebaseListObservable<any>;
    

    constructor(
        private camera: Camera,
        private photoPrvd: PhotoProvider,
        private bcs: BarcodeScanner,
        private db: AngularFireDatabase,
        private barcodeprvd: BarcodeProvider
    ) {
        
        try {
            this.lista = db.list('/caminho_das_imagens/');         
        } catch (error) {
            console.log(error);
        }
        
    }


	pickImageFromGallery(){
        

		this.camera.getPicture({
			destinationType: this.camera.DestinationType.DATA_URL,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			targetWidth: 360,
            targetHeight: 240,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            allowEdit: true
		}).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photoPrvd.uploadPhoto(this.base64Image);
		}, (err) => {
			console.log(err);
        });
        
    }
    
    
    takePicture(){
        
        this.camera.getPicture({
            destinationType : this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            targetWidth: 360,
            targetHeight: 240,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            allowEdit: true
        }).then(imageData => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            this.photoPrvd.uploadPhoto(this.base64Image);
            
        }).catch((erro) => {
            
            console.log("ERROR -> " + JSON.stringify(erro));
        });
    }
    
    baixarArquivo(nome: string){
        let storageRef = firebase.storage().ref('/Users/');
        let caminho = storageRef.child('images/'+nome);
        caminho.getDownloadURL().then(url => {
           console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
        });
    }

    codigoBarras(){
        this.bcs.scan().then((barcodeData) => {
            this.barcodeprvd.alertaCodBarras(barcodeData.text);
        }, (err) => {
               // An error occurred
        });
    }


}
