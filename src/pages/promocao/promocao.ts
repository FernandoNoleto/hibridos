import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PhotoProvider } from '../../providers/photo/photo';
//import { ToastController } from 'ionic-angular';



@Component({
  	selector: 'page-promocao',
  	templateUrl: 'promocao.html'
})


export class PromocaoPage {

    promocao;    

    constructor(
        private photoPrvd: PhotoProvider,
        private navPrm: NavParams
    ) {
        try {
            this.promocao = navPrm.data;
        } catch (error) {
            console.log(error);
        }

    }


    irParaLocal(){

    }

    abrirImagem(){
        //imagem 360 WIDTH x 240 HEIGHT
        console.log('função abrir imagem');
    }


}