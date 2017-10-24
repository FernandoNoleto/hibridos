import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { ToastController} from 'ionic-angular';


export class User{
    nomeCompleto: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthProvider {

    blockLogin: boolean = false;
    
    constructor(
        private autenticacaoAF: AngularFireAuth,
        private facebook: Facebook,
        private toastCtrl: ToastController
    ) { }
    
    createUser(user: User) {
        return this.autenticacaoAF.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    
    signIn(user: User) {
        return this.autenticacaoAF.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    
    
    signOutFirebase() {
        return this.autenticacaoAF.auth.signOut();
    }
    
    resetPassword(email: string) {
        return this.autenticacaoAF.auth.sendPasswordResetEmail(email);
    }

    signInWithFacebook(){
        return this.facebook.login(['public_profile', 'email'])
        .then((res: FacebookLoginResponse) => {
            return this.autenticacaoAF.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
        })
        .catch(e => {
            let alerta = this.toastCtrl.create({
                duration: 3000,
                position: 'top'
            });
            alerta.setMessage(e);
    
            alerta.present();
        });

    }

    signOut() : firebase.Promise<any> {
        if (this.autenticacaoAF.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.autenticacaoAF.auth.currentUser.providerData.length; i++) {
                var provider = this.autenticacaoAF.auth.currentUser.providerData[i];
    
                if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) { // Se for facebook
                    return this.facebook.logout().then(() => {
                            return this.signOutFirebase();
                    })
                }
            }
        }
        return this.signOutFirebase();
    }

    deleteAccount(){
        try {

            return this.autenticacaoAF.auth.currentUser.delete();
            /*
            let user = firebase.auth().currentUser;
            user.delete().then( () => {
                (<any>window).location = 'index.html';
             }, (err) => {
                 console.log(JSON.stringify(err));
             });
             */
        }catch (err) {
             console.log(JSON.stringify(err));
        }
    }

}
