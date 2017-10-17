import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
//import { Inject } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class BarcodeProvider {


    constructor(public alertCtrl: AlertController) {}
    

    alertaCodBarras(conteudo: string) {
        let alert = this.alertCtrl.create({
            title: 'Código de barras lido!!',
            subTitle: conteudo,
            buttons: ['OK']
        });
        alert.present();
    
    }
    

    
}
