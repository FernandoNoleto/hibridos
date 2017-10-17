import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


export class User{
    nomeCompleto: string;
    email: string;
    matricula: string;
    password: string;
}

@Injectable()
export class AuthProvider {

    blockLogin: boolean = false;
    
    constructor(private autenticacaoAF: AngularFireAuth) { }
    
    createUser(user: User) {
        return this.autenticacaoAF.auth.createUserWithEmailAndPassword(user.email, user.password);
    }
    
    signIn(user: User) {
        return this.autenticacaoAF.auth.signInWithEmailAndPassword(user.email, user.password);
    }
    
    signOut() : firebase.Promise<any> {
        if (this.autenticacaoAF.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.autenticacaoAF.auth.currentUser.providerData.length; i++) {
                var provider = this.autenticacaoAF.auth.currentUser.providerData[i];
            }
        }
    
        return this.signOutFirebase();
    }
    
    signOutFirebase() {
        return this.autenticacaoAF.auth.signOut();
    }
    
    resetPassword(email: string) {
        return this.autenticacaoAF.auth.sendPasswordResetEmail(email);
    }

}
