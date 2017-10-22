import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Injectable()
export class BarcodeProvider {


    constructor(public alertCtrl: AlertController, private bcs: BarcodeScanner) {}
    

    alertaCodBarras() {
        this.bcs.scan().then((barcodeData) => {
            let alert = this.alertCtrl.create({
                title: 'Código de barras lido!!',
                subTitle: barcodeData.text,
                buttons: ['OK']
            });
            alert.present();
        }, (err) => {
            let alert = this.alertCtrl.create({
                title: 'Erro ao ler código de barras!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });

        

    
    }
    

    
}
