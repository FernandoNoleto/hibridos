import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'page-promocoessalvas',
    templateUrl: 'promocoessalvas.html',
})
export class PromocoessalvasPage {

    promoSalvas: FirebaseListObservable<any>;

    constructor(
        private db: AngularFireDatabase,
        private angFireAuth: AngularFireAuth
    )
    {
        if(this.angFireAuth.auth.currentUser != null){
            this.promoSalvas = this.db.list('/promocoes_salvas/'
            + this.angFireAuth.auth.currentUser.uid);

        } else {
            console.log('erro');
        }
    }


    excluir(promocaoExcluir: string){
        this.promoSalvas.remove(promocaoExcluir);
    }

}
