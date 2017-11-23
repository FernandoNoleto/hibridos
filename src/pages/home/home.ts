import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PhotoProvider } from '../../providers/photo/photo';
import { BarcodeProvider } from '../../providers/barcode/barcode';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { AutenticacaoPage } from '../autenticacao/autenticacao';
import { MapapromocoesPage } from '../mapapromocoes/mapapromocoes';
import { RangeProvider } from '../../providers/range/range';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';


@Component({
  	selector: 'page-home',
  	templateUrl: 'home.html'
})
export class HomePage {

    public base64Image: string;
    lista: FirebaseListObservable<any>;
    promocoeslista: FirebaseListObservable<any>;
    range: number;
    localAtualLat: any;
    localAtualLng: any;
    

    constructor(
        private camera: Camera,
        private photoPrvd: PhotoProvider,
        private db: AngularFireDatabase,
        private toastCtrl: ToastController,
        private angFireAuth: AngularFireAuth,
        private barcodeprvd: BarcodeProvider,
        private alertCtrl: AlertController,
        private navCtrl: NavController,
        public rangeProvider: RangeProvider,
        private localPrvd: LocalizacaoProvider   
    ) {        
        
        try {
            this.lista = db.list('/caminho_das_imagens/');
        } catch (error) {
            console.log(error);
        }
        this.range = this.rangeProvider.range;
        this.localAtualLat = this.localPrvd.localizacaoLat;
        this.localAtualLng = this.localPrvd.localizacaoLng;
        
    }


	pickImageFromGallery(){

        try {
            //Só pode pegar imagem com login
            if(this.angFireAuth.auth.currentUser != null){            
                this.camera.getPicture({
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                    allowEdit: true
                }).then((imageData) => {
                    this.base64Image = "data:image/jpeg;base64," + imageData;
                    this.photoPrvd.uploadPhoto(this.base64Image);
                }, (err) => {
                    console.log(err);
                });
            }
            else{
                //Alerta caso não teha login
                this.alerta();
            }
        } catch (error) {
            console.log(error);
        }

    }
    
    
    takePicture(){

        try {
            //Só pode pegar imagem com login
            if(this.angFireAuth.auth.currentUser != null){

                this.camera.getPicture({
                    destinationType : this.camera.DestinationType.DATA_URL,
                    sourceType : this.camera.PictureSourceType.CAMERA,
                    encodingType: this.camera.EncodingType.PNG,
                    saveToPhotoAlbum: true,
                    allowEdit: true
                }).then((imageData) => {
                    this.base64Image = "data:image/jpeg;base64," + imageData;
                    this.photoPrvd.uploadPhoto(this.base64Image);
                }, (err) =>  {
                    console.log(err);
                });

         
            } else {
                //Alerta caso não teha login
                this.alerta();
            }

        } catch (error) {
            console.log(error);
        }
        
       
    }
    
    /*
    baixarArquivo(nome: string){
        let storageRef = firebase.storage().ref('/Users/');
        let caminho = storageRef.child('images/'+nome);
        caminho.getDownloadURL().then(url => {
           console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
        });
    }
    */

    codigoBarras(){
        //Código de barras -> Única coisa que não me deu trabalho nessa porra :)
        this.barcodeprvd.alertaCodBarras();
    }

    
    salvarPromocao(promo){
        try {
            if(this.angFireAuth.auth.currentUser != null){
                this.promocoeslista = this.db.list('/promocoes_salvas/'
                + this.angFireAuth.auth.currentUser.uid);

                this.promocoeslista.push(promo);

                let toast = this.toastCtrl.create({
                    message: 'Promocao salva',
                    duration: 3000
                });
                toast.present();

            } else {
                this.alerta();
            }

        } catch (error) {
            console.log(error);
        }
        

    }
    

    alerta(){
        let alerta = this.alertCtrl.create({
            title: 'Voce não está logado.',
            message: 'Você precisa estar logado para salvar suas promoções!',
            buttons: [
                {
                    text: 'Fazer login',
                    handler: () => {
                        this.navCtrl.push(AutenticacaoPage);
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        });
        alerta.present();

    }

    irParaMapa(img_selec){
        try {
            this.navCtrl.push(MapapromocoesPage, img_selec);
        } catch (error) {
            console.log(error);
        }
    }

    Range(){
        if(!this.range)
            this.range = 0;
        console.log(this.range);
        alert(this.range);
    }

    calcularDistancia(){
        //this.lista.
        var deg2rad = 0.017453292519943295; // === Math.PI / 180
        var cos = Math.cos;
        this.localAtualLat *= deg2rad;
        this.localAtualLng *= deg2rad;
        //lat2 *= deg2rad;
        //lon2 *= deg2rad;
        var diam = 12742; // Diameter of the earth in km (2 * 6371)
        //var dLat = lat2 - lat1;
        //var dLon = lon2 - lon1;
        //var a = ( (1 - cos(dLat)) +
        //        (1 - cos(dLon)) * cos(lat1) * cos(lat2)
        //) / 2;

        //return diam * Math.asin(Math.sqrt(a)) * 1000;
    }

}
