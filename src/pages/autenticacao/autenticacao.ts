import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { CriarContaPage } from '../criarconta/criarconta';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Geolocation } from '@ionic-native/geolocation';
import { PromocoessalvasPage } from '../promocoessalvas/promocoessalvas'

export class User{
    nomeCompleto: string;
    email: string;
    matricula: string;
    password: string;
}



@Component({
  selector: 'page-autenticacao',
  templateUrl: 'autenticacao.html',
})
export class AutenticacaoPage {
    

    user: User = new User();
    @ViewChild('form') form: NgForm;

    logado: boolean;
    naologado: boolean;
    nome: string;
    email: string;
    versao: string = "FREE";
    localizacao: string = "";
    areaAdm: string = " - ";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private angFireAuth: AngularFireAuth,
        private authService: AuthProvider,
        private carregarCtrl: LoadingController,
        private geolocation: Geolocation,
        private geocoder: NativeGeocoder
    ) {
        try {
            if(this.angFireAuth.auth.currentUser == null){
                this.logado = false;
                this.naologado = true;
            }
            else{
                this.nome = this.angFireAuth.auth.currentUser.displayName;
                this.email = this.angFireAuth.auth.currentUser.email;
                this.logado = true;
                this.naologado = false;
            }
                
        } catch (error) {
            console.log(error);
        }

      
        
        this.geolocation.getCurrentPosition().then((resp) => {
            
            this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
            .then((result: NativeGeocoderReverseResult) =>{
            console.log(JSON.stringify(result));
            this.localizacao = result.locality.toLocaleUpperCase();
            this.areaAdm += result.administrativeArea.toLocaleUpperCase();
            })
            .catch((error: any) => {
                console.log(error);
                let toast = this.toastCtrl.create({duration: 3000, message: this.localizacao});
                toast.present();
            });

        }).catch((error) => {
            let toast = this.toastCtrl.create({message: error, duration: 3000});
            toast.present();
            console.log('Error getting location', error);
        });
        

       

    }

    signIn() {
        let carregando = this.carregarCtrl.create({
            content: "Entrando...",
            duration: 500
        });

        if (this.user.email.indexOf('@') == -1)                         // COMPLETA O EMAIL COM @uft.edu.br
            this.user.email = this.user.email + '@uft.edu.br'

        if (this.form.form.valid) {                                     // se o formulario for valido
            this.authService.signIn(this.user)
                .then(() => {                                               // se login aceito
                carregando.present();                                     // CARREGANDO
                this.authService.blockLogin = true;                       // bloqueia a página de login
                this.navCtrl.setRoot(HomePage);                           // entra na pagina Home
            })
            .catch((error: any) => {                                    // se der erro
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            if (error.code == 'auth/invalid-email') {                 // email invalido
                toast.setMessage('O e-mail digitado não é valido.');
            } else if (error.code == 'auth/user-disabled') {          // usuario ja autenticado ou desabilitado
                toast.setMessage('O usuário está desativado.');
            } else if (error.code == 'auth/user-not-found') {         // usuario nao encontrado
                toast.setMessage('O usuário não foi encontrado.');
            } else if (error.code == 'auth/wrong-password') {         // senha fraca
                toast.setMessage('A senha digitada não é valida.');
            }
            toast.present();
            });
        }

    }

    signOut(){
        let carregando = this.carregarCtrl.create({
            content: "Saindo...",
            duration: 500
        });

        this.authService.signOutFirebase();
        carregando.present();
        this.navCtrl.setRoot(HomePage);
    }

    openPage(){
        this.navCtrl.push(CriarContaPage);
    }

    signInWithFacebook(){
        this.authService.signInWithFacebook();
        this.navCtrl.setRoot(HomePage);
    }

    abrirPaginaLogin(){
        this.navCtrl.push(LoginPage);
    }

    deletarConta(){

        let toast = this.toastCtrl.create({
            duration: 3000,
            message: 'Conta excluída com sucesso!'
        });

        let alert = this.alertCtrl.create({
            title: 'Você está certo disso?',
            subTitle: 'Você está prestes a excluir sua conta',
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Excluir',
                    handler: () => {
                        this.authService.deleteAccount().
                        catch((err) => {
                            console.log(err);
                        });
                        toast.present();
                        this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });
        alert.present();
        
        
    }


    abrirPromocoesSalvas(){
        this.navCtrl.push(PromocoessalvasPage);
    }
    
}