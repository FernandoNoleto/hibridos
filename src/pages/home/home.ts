import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';
import { PhotoProvider } from '../../providers/photo/photo';
import { FirebaseApp } from 'angularfire2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BarcodeProvider } from '../../providers/barcode/barcode';




@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})


export class HomePage {

    public base64Image: string;
    public imgs_card: Array<string> = new Array();

    constructor(public navCtrl: NavController, private camera: Camera,
        public photoPrvd: PhotoProvider, private bcs: BarcodeScanner,
        public barcodeprvd: BarcodeProvider) {

    }


	pickImageFromGallery(){
		this.camera.getPicture({
			destinationType: this.camera.DestinationType.DATA_URL,
			sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
			targetHeight: 1000,
			targetWidth: 1000
		}).then((imageData) => {
            this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.uploadPhoto(this.base64Image);
            this.photoPrvd.uploadPhoto(this.base64Image);
		}, (err) => {
			console.log(err);
        });
        
    }
    
    
    takePicture(){
        this.camera.getPicture({
            quality : 95,
            destinationType : this.camera.DestinationType.DATA_URL,
            sourceType : this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(imageData => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
            
            //this.uploadPhoto(this.base64Image);
            this.photoPrvd.uploadPhoto(this.base64Image);
        }, error => {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    }
    
    baixarArquivo(nome: string){
        let storageRef = firebase.storage().ref('/Photos/');
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
