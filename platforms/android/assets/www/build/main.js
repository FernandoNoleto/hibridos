webpackJsonp([0],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapapromocoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapapromocoesPage = (function () {
    function MapapromocoesPage(geolocation, navPrms, geocoder, loadingCtrl) {
        this.geolocation = geolocation;
        this.navPrms = navPrms;
        this.geocoder = geocoder;
        this.loadingCtrl = loadingCtrl;
        this.local = "";
        this.img_selec = this.navPrms.data;
        this.loading = this.loadingCtrl.create({
            content: 'Carregando mapa...'
        });
        this.loading.present();
        this.loadMap();
    }
    MapapromocoesPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(_this.img_selec.latitude, _this.img_selec.longitude);
            _this.geocoder.reverseGeocode(_this.img_selec.latitude, _this.img_selec.longitude)
                .then(function (result) {
                console.log(JSON.stringify(result));
                _this.local = result.subLocality.toLocaleUpperCase();
            })
                .catch(function (error) {
                console.log(error);
            });
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.addMarker();
            _this.loading.dismissAll();
        }, function (err) {
            console.log(err);
        });
    };
    MapapromocoesPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>" + this.img_selec.nome + "</h4>" + "<br>" + this.local;
        this.addInfoWindow(marker, content);
    };
    MapapromocoesPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return MapapromocoesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapapromocoesPage.prototype, "mapElement", void 0);
MapapromocoesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mapapromocoes',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/mapapromocoes/mapapromocoes.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <ion-title>\n            {{img_selec.nome}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n    <div style="width:100%; height:100%" #map id="map"></div>  \n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/mapapromocoes/mapapromocoes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], MapapromocoesPage);

//# sourceMappingURL=mapapromocoes.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RangeProvider = (function () {
    function RangeProvider() {
    }
    RangeProvider.prototype.setRange = function (r) {
        this.range = r;
    };
    return RangeProvider;
}());
RangeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RangeProvider);

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Foto */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//adicionar outras informações posteriormente
var Foto = (function () {
    function Foto() {
    }
    return Foto;
}());

var PhotoProvider = (function () {
    function PhotoProvider(alertCtrl, geolocation, db, toastCtrl, angFireAuth) {
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.angFireAuth = angFireAuth;
        try {
            this.lista_caminho = db.list('/caminho_das_imagens/');
            this.lista_usuario = db.list('/contribuicoes_usuarios/' + this.angFireAuth.auth.currentUser.uid);
        }
        catch (error) {
            console.log(error);
        }
        this.foto = new Foto;
    }
    PhotoProvider.prototype.uploadPhoto1 = function (captureDataUrl) {
        var _this = this;
        /*BEGIN_Pegar local da foto*/
        this.geolocation.getCurrentPosition().then(function (resp) {
            //Coordenadas da foto....
            _this.foto.latitude = resp.coords.latitude;
            _this.foto.longitude = resp.coords.longitude;
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({ message: error, duration: 3000 });
            toast.present();
            //console.log('Error getting location', error);
        });
        /*END_Pegar local da foto*/
        /*BEGIN_Aqui realmente se faz o upload da foto*/
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage().ref('/Users/');
        var filename = Math.floor(Date.now() / 1000);
        var uploadTask = storageRef.child(filename + ".jpg");
        uploadTask.putString(captureDataUrl, __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            //código da foto: um número aleatório
            _this.foto.cod = filename.toString();
            //caminho da foto: caminho que está armezenado dentro do firebase
            _this.foto.url = snapshot.downloadURL;
            //Armazenando o camnho da foto
            _this.lista_caminho.push(_this.foto);
            _this.lista_usuario.push(_this.foto);
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            var toast = _this.toastCtrl.create({
                message: progress.toString() + '% done',
                showCloseButton: true
            });
            toast.present();
            _this.foto = new Foto;
        })
            .catch(function (erro) {
            var toast = _this.toastCtrl.create({
                message: erro.message,
                showCloseButton: true
            });
            toast.present();
        });
        /*END_Aqui realmente se faz o upload da foto*/
    };
    PhotoProvider.prototype.uploadPhoto = function (captureDataUrl) {
        var _this = this;
        /*BEGIN_Alerta para fornecer uma descrição para a promoção*/
        var desc;
        var promo_desc = this.alertCtrl.create({
            title: 'Digite um título pra sua promoção',
            inputs: [{
                    name: 'nome_promo',
                    placeholder: 'Título'
                }],
            buttons: [{
                    text: 'Cancelar',
                    handler: function (data) {
                        desc = 'Sem título';
                        console.log('Cancel clicked');
                        _this.foto.nome = desc;
                        _this.uploadPhoto1(captureDataUrl);
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log('Save clicked');
                        desc = data.nome_promo;
                        _this.foto.nome = desc;
                        _this.uploadPhoto1(captureDataUrl);
                    }
                }]
        });
        promo_desc.present();
        /*END_Alerta para fornecer uma descrição para a promoção*/
    };
    return PhotoProvider;
}());
PhotoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], PhotoProvider);

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodeProvider = (function () {
    function BarcodeProvider(alertCtrl, bcs) {
        this.alertCtrl = alertCtrl;
        this.bcs = bcs;
    }
    BarcodeProvider.prototype.alertaCodBarras = function () {
        var _this = this;
        this.bcs.scan().then(function (barcodeData) {
            var alert = _this.alertCtrl.create({
                title: 'Código de barras lido!!',
                subTitle: barcodeData.text,
                buttons: ['OK']
            });
            alert.present();
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Erro ao ler código de barras!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return BarcodeProvider;
}());
BarcodeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], BarcodeProvider);

//# sourceMappingURL=barcode.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = (function () {
    function User() {
    }
    return User;
}());

var CriarContaPage = (function () {
    function CriarContaPage(navCtrl, navParams, authService, toastCtrl, carregarCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.carregarCtrl = carregarCtrl;
        this.user = new User();
    }
    CriarContaPage.prototype.criarConta = function () {
        var _this = this;
        var carregando = this.carregarCtrl.create({
            content: "Criando conta...",
            duration: 1500
        });
        if (this.user.email.indexOf('@') == -1)
            this.user.email = this.user.email + '@uft.edu.br';
        this.authService.createUser(this.user)
            .then(function () {
            carregando.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            if (error.code == 'auth/invalid-email') {
                toast.setMessage('O e-mail digitado não é valido.');
            }
            else if (error.code == 'auth/user-disabled') {
                toast.setMessage('O usuário está desativado.');
            }
            else if (error.code == 'auth/user-not-found') {
                toast.setMessage('O usuário não foi encontrado.');
            }
            else if (error.code == 'auth/wrong-password') {
                toast.setMessage('A senha digitada não é valida.');
            }
            else if (error.code == 'auth/email-already-in-use') {
                toast.setMessage('Usuário já existe.');
            }
            toast.present();
        });
    };
    return CriarContaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], CriarContaPage.prototype, "form", void 0);
CriarContaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-criarconta',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/criarconta/criarconta.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            Cadastro\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n    <form #form="ngForm" novalidate>\n  \n        <ion-item>\n            <ion-label stacked>Nome completo</ion-label>\n            <ion-input type="text" name="nomeCompleto" [(ngModel)]="user.nomeCompleto" #nomeCompleto="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item *ngIf="nomeCompleto.errors && (nomeCompleto.dirty || nomeCompleto.touched)" class="text-danger">\n            Campo obrigatório\n        </ion-item>\n        \n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n            Campo obrigatório\n        </ion-item>\n        \n        <div class="spacer" style="width: 300px; height: 38px;"></div>\n        \n        <ion-item>\n            <ion-label stacked>Senha</ion-label>\n            <ion-input type="password" name="password" placeholder="Digite uma senha" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n            O campo é obrigatório\n        </ion-item>\n        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->\n        <!--            CAMPO PARA REPETIÇÃO DE SENHA -->\n        <!-- <ion-item>\n            <ion-input type="password" name="rsenha" placeholder="Repita a senha" [(ngModel)]="rsenha" #rsenha="ngModel" required></ion-input>\n        </ion-item>\n        <ion-item *ngIf="rsenha == password" class="text-danger">\n            O campo é obrigatório\n        </ion-item> -->\n        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->\n        <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="criarConta()">\n            Criar\n        </button>\n  \n    </form>\n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/criarconta/criarconta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], CriarContaPage);

//# sourceMappingURL=criarconta.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User() {
    }
    return User;
}());

var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, authService, carregarCtrl, angFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.carregarCtrl = carregarCtrl;
        this.angFireAuth = angFireAuth;
        this.user = new User(); // providers
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var carregando = this.carregarCtrl.create({
            content: "Entrando...",
            duration: 500
        });
        if (this.user.email.indexOf('@') == -1)
            this.user.email = this.user.email + '@uft.edu.br';
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(function () {
                carregando.present(); // CARREGANDO
                _this.authService.blockLogin = true; // bloqueia a página de login
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); // entra na pagina Home
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    LoginPage.prototype.resetarSenha = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.user.email)
                .then(function () {
                toast_1.setMessage('Solicitação foi enviada para o seu e-mail.');
                toast_1.present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast_1.setMessage('O usuário não foi encontrado.');
                }
                toast_1.present();
            });
        }
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], LoginPage.prototype, "form", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/login/login.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            MINHA CONTA\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n  \n  \n<ion-content padding>\n  \n    <form #form="ngForm" novalidate>\n        <ion-list>\n    \n            <ion-item>\n                <ion-label stacked block>E-mail</ion-label>\n                <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n            </ion-item>\n            \n            <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n                O campo é obrigatório\n            </ion-item>\n    \n            <ion-item>\n                <ion-label stacked block>Senha</ion-label>\n                <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n            </ion-item>\n            \n            <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n                O campo é obrigatório\n            </ion-item>\n    \n        </ion-list>\n  \n        <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="signIn()">\n            Entrar\n        </button>\n    </form>\n    \n    <ion-footer no-shadow>\n        <ion-toolbar position="bottom">\n            <button ion-button block (click)="resetarSenha()" [disabled]="!form.form.valid">\n                Esqueci minha senha\n            </button>\n        </ion-toolbar>\n    </ion-footer>\n  \n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocoessalvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapapromocoes_mapapromocoes__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PromocoessalvasPage = (function () {
    function PromocoessalvasPage(db, angFireAuth, navCtrl) {
        this.db = db;
        this.angFireAuth = angFireAuth;
        this.navCtrl = navCtrl;
        if (this.angFireAuth.auth.currentUser != null) {
            this.promoSalvas = this.db.list('/promocoes_salvas/'
                + this.angFireAuth.auth.currentUser.uid);
        }
        else {
            console.log('erro');
        }
    }
    PromocoessalvasPage.prototype.excluir = function (promocaoExcluir) {
        this.promoSalvas.remove(promocaoExcluir);
    };
    PromocoessalvasPage.prototype.irParaMapa = function (img_selec) {
        try {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mapapromocoes_mapapromocoes__["a" /* MapapromocoesPage */], img_selec);
        }
        catch (error) {
            console.log(error);
        }
    };
    return PromocoessalvasPage;
}());
PromocoessalvasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-promocoessalvas',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/promocoessalvas/promocoessalvas.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <ion-title>Suas promoções salvas</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card *ngFor="let promo of promoSalvas | async">\n        <img src="{{promo.url}}"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{promo.nome}}\n            </ion-card-title>\n            <p>\n                {{promo.local}}\n            </p>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col>\n                <button ion-button clear small color="danger" icon-start (click)="excluir(promo.$key)">\n                <ion-icon name=\'trash\'></ion-icon>\n                    Excluir\n                </button>\n            </ion-col>\n            <ion-col text-right>\n                <button ion-button clear small color="laranja" icon-start (click)="irParaMapa(promo)" >\n                <ion-icon name=\'pin\'></ion-icon>\n                    Mostrar no mapa\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/promocoessalvas/promocoessalvas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]])
], PromocoessalvasPage);

//# sourceMappingURL=promocoessalvas.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalizacaoProvider = (function () {
    function LocalizacaoProvider(geolocation, toastCtrl) {
        var _this = this;
        this.geolocation = geolocation;
        this.toastCtrl = toastCtrl;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.localizacaoLat = resp.coords.latitude;
            _this.localizacaoLng = resp.coords.longitude;
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({ message: error, duration: 3000 });
            toast.present();
        });
    }
    return LocalizacaoProvider;
}());
LocalizacaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
], LocalizacaoProvider);

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapaPage = (function () {
    function MapaPage(geolocation) {
        this.geolocation = geolocation;
        this.loadMap();
    }
    MapaPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    MapaPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    MapaPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    return MapaPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapaPage.prototype, "mapElement", void 0);
MapaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'mapa-page',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/mapa/mapa.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n        Mapa\n    </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Adicionar marcador</button>\n        </ion-buttons>  \n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n    <div style="width:100%; height:100%" #map id="map"></div>  \n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/mapa/mapa.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
], MapaPage);

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Itens */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listassalvas_listassalvas__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autenticacao_autenticacao__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Itens = (function () {
    function Itens() {
        this.produtos = new Array();
    }
    return Itens;
}());

var ListaPage = (function () {
    function ListaPage(alertCtrl, db, navParams, navCtrl, modalCtrl, angFireAuth) {
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.angFireAuth = angFireAuth;
        try {
            if (this.angFireAuth.auth.currentUser != null)
                this.lista = db.list('/itens_usuarios/' + this.angFireAuth.auth.currentUser.uid);
            else {
                //this.lista = db.list('/itens_anonimos');
                this.alerta();
            }
        }
        catch (error) {
            console.log(error);
        }
        this.itens = new Itens;
    }
    //Função que avisa caso o usuário ainda não tenha logado
    ListaPage.prototype.alerta = function () {
        var _this = this;
        var alerta = this.alertCtrl.create({
            title: 'Voce não está logado. Por favor, faça login.',
            message: 'Faça login para poder salvar suas lista de compras!',
            buttons: [
                {
                    text: 'Fazer login',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__autenticacao_autenticacao__["a" /* AutenticacaoPage */]);
                    }
                },
                {
                    text: 'Ok'
                }
            ]
        });
        alerta.present();
    };
    ListaPage.prototype.cadastrar1 = function (nome) {
        var _this = this;
        if (this.arroz)
            this.itens.produtos.push("arroz");
        if (this.feijao)
            this.itens.produtos.push("feijão");
        if (this.oleo)
            this.itens.produtos.push("óleo");
        if (this.acucar)
            this.itens.produtos.push("açúcar");
        if (this.sal)
            this.itens.produtos.push("sal");
        if (this.cafe)
            this.itens.produtos.push("café");
        if (this.leiteempo)
            this.itens.produtos.push("leite em pó");
        if (this.macarrao)
            this.itens.produtos.push("macarrão");
        if (this.extratoTomate)
            this.itens.produtos.push("extrato de tomate");
        if (this.tempero)
            this.itens.produtos.push("tempero completo");
        if (this.achocolatado)
            this.itens.produtos.push("Achocolatado em pó");
        if (this.molhoTomate)
            this.itens.produtos.push("molho de tomate");
        if (this.farinhaTrigo)
            this.itens.produtos.push("farinha de trigo");
        if (this.gelatina)
            this.itens.produtos.push("gelatina");
        if (this.biscoito)
            this.itens.produtos.push("biscoito");
        if (this.milho)
            this.itens.produtos.push("milho verde");
        this.itens.nome = nome;
        this.lista.push(this.itens).then(function () {
            _this.itens = new Itens();
        });
        //Setando checkbox false após criar nova lista de compras
        this.arroz = false;
        this.feijao = false;
        this.oleo = false;
        this.acucar = false;
        this.cafe = false;
        this.leiteempo = false;
        this.sal = false;
        this.macarrao = false;
        this.extratoTomate = false;
        this.tempero = false;
        this.achocolatado = false;
        this.molhoTomate = false;
        this.farinhaTrigo = false;
        this.gelatina = false;
        this.biscoito = false;
        this.milho = false;
    };
    ListaPage.prototype.cadastrar = function () {
        var _this = this;
        var nome;
        var prompt = this.alertCtrl.create({
            title: 'Nova lista de compras',
            message: "Digite o nome da sua lista de compras",
            inputs: [{
                    name: 'title',
                    placeholder: 'Nome'
                }],
            buttons: [{
                    text: 'Cancelar',
                    handler: function (data) {
                        nome = null;
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Save clicked');
                        nome = data.title;
                        _this.cadastrar1(nome);
                    }
                }
            ]
        });
        prompt.present();
    };
    //Função que chama pagina das listas salvas
    ListaPage.prototype.obterValor = function (value) {
        console.log("era pra abrir as listas salvas!!!!!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listassalvas_listassalvas__["a" /* ListassalvasPage */]);
    };
    return ListaPage;
}());
ListaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lista',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/listadecompras/listadecompras.html"*/'\n<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Lista de compras</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="obterValor({value: 0})">listas salvas</button>\n        </ion-buttons> \n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding> \n\n    <ion-item>\n        <ion-label>Arroz</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="arroz"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Feijão</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="feijao"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Óleo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="oleo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Açúcar</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="acucar"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Café</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="cafe"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Leite em pó</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="leiteempo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Sal</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="sal"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Macarrão</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="macarrao"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Extrato de tomate</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="extratoTomate"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Tempero completo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="tempero"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Achocolatado em pó</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="achocolatado"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Molho de tomate</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="molhoTomate"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Farinha de trigo</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="farinhaTrigo"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Gelatina</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="gelatina"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Biscoito</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="biscoito"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Milho verde</ion-label>\n        <ion-checkbox color="dark" [(ngModel)]="milho"></ion-checkbox>\n    </ion-item> \n    \n    <ion-fab right bottom>\n        <button ion-fab color="dark" (click)="cadastrar()">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/listadecompras/listadecompras.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
], ListaPage);

//# sourceMappingURL=listadecompras.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Itens */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListassalvasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Itens = (function () {
    function Itens() {
        this.produtos = new Array();
    }
    return Itens;
}());

var ListassalvasPage = (function () {
    //itens: Itens;
    function ListassalvasPage(navCtrl, navParams, db, angFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angFireAuth = angFireAuth;
        try {
            if (this.angFireAuth.auth.currentUser != null)
                this.lista = db.list('/itens_usuarios/' + this.angFireAuth.auth.currentUser.uid);
            else
                this.lista = db.list('/itens_anonimos');
        }
        catch (error) {
            console.log(error);
        }
        //this.itens = new Itens();
    }
    ListassalvasPage.prototype.editar = function () {
        console.log("clicou editar");
    };
    ListassalvasPage.prototype.excluir = function (id) {
        this.lista.remove(id).then(function () {
            console.log("Exclui: " + id);
        });
    };
    return ListassalvasPage;
}());
ListassalvasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listassalvas',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/listassalvas/listassalvas.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <ion-title>Listas Salvas</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let itens of lista | async" color="laranja_c">\n        <ion-card-header>\n            {{itens.nome}}\n        </ion-card-header>\n        <ion-card-content>    \n                {{itens.produtos}}\n            <ion-item color="laranja_c">\n                <ion-avatar item-end (click)="excluir(itens.$key)">\n                    <ion-icon name="trash"></ion-icon>\n                </ion-avatar>\n                \n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n    <!--ion-card *ngFor="let itens of lista | async" color="azul">\n        <ion-avatar item-end (click)="excluir(itens.$key)">\n            <ion-icon name="trash"></ion-icon>\n        </ion-avatar>\n        <ion-card-header>\n            {{itens.nome}}\n        </ion-card-header>\n        <ion-card-content>\n            {{itens.produtos}}\n        </ion-card-content>\n        \n    </ion-card-->\n          \n    \n    <!--ion-list *ngFor="let itens of lista | async">\n        <ion-item-sliding (ionDrag)="excluir($key)">\n            <ion-item>\n                <ion-avatar item-start>\n                    <ion-icon name="trash"></ion-icon>\n                </ion-avatar>\n                <p>{{itens.nome}}</p>\n            </ion-item>\n            <ion-item-options>\n                    <button ion-button color="light" icon-start>\n                      <ion-icon name="ios-more"></ion-icon>\n                      More\n                    </button>\n                    <button ion-button color="primary" icon-start>\n                      <ion-icon name="text"></ion-icon>\n                      Text\n                    </button>\n                    <button ion-button color="secondary" icon-start>\n                      <ion-icon name="call"></ion-icon>\n                      Call\n                    </button>\n            </ion-item-options>\n        </ion-item-sliding>    \n    </ion-list-->\n</ion-content>\n'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/listassalvas/listassalvas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], ListassalvasPage);

//# sourceMappingURL=listassalvas.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(331);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_mapa_mapa__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listadecompras_listadecompras__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_listassalvas_listassalvas__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_autenticacao_autenticacao__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_criarconta_criarconta__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_promocoessalvas_promocoessalvas__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_mapapromocoes_mapapromocoes__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_photo_photo__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_barcode_barcode__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_range_range__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_localizacao_localizacao__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Todas os plugins adicionados














//Paginas










//Providers





// Initialize Firebase
var config = {
    apiKey: "AIzaSyCEV8h6K8l1MQin4R4LNkqgj7kp3ArLBZ0",
    authDomain: "promomax-54fa1.firebaseapp.com",
    databaseURL: "https://promomax-54fa1.firebaseio.com",
    projectId: "promomax-54fa1",
    storageBucket: "promomax-54fa1.appspot.com",
    messagingSenderId: "71185522087"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listadecompras_listadecompras__["a" /* ListaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_listassalvas_listassalvas__["a" /* ListassalvasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_autenticacao_autenticacao__["a" /* AutenticacaoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_criarconta_criarconta__["a" /* CriarContaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_promocoessalvas_promocoessalvas__["a" /* PromocoessalvasPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_mapapromocoes_mapapromocoes__["a" /* MapapromocoesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_mapa_mapa__["a" /* MapaPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_listadecompras_listadecompras__["a" /* ListaPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_listassalvas_listassalvas__["a" /* ListassalvasPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_autenticacao_autenticacao__["a" /* AutenticacaoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_criarconta_criarconta__["a" /* CriarContaPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_promocoessalvas_promocoessalvas__["a" /* PromocoessalvasPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_mapapromocoes_mapapromocoes__["a" /* MapapromocoesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_24__providers_photo_photo__["a" /* PhotoProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_barcode_barcode__["a" /* BarcodeProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_range_range__["a" /* RangeProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_localizacao_localizacao__["a" /* LocalizacaoProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listadecompras_listadecompras__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_autenticacao_autenticacao__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'MINHA CONTA', component: __WEBPACK_IMPORTED_MODULE_7__pages_autenticacao_autenticacao__["a" /* AutenticacaoPage */] },
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'MAPA', component: __WEBPACK_IMPORTED_MODULE_5__pages_mapa_mapa__["a" /* MapaPage */] },
            { title: 'LISTA DE COMPRAS', component: __WEBPACK_IMPORTED_MODULE_6__pages_listadecompras_listadecompras__["a" /* ListaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.overlaysWebView(true);
            //this.statusBar.styleDefault();
            _this.statusBar.backgroundColorByHexString('#cc6908');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/app/app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="laranja">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to   -go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_photo_photo__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_barcode_barcode__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autenticacao_autenticacao__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mapapromocoes_mapapromocoes__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_range_range__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_localizacao_localizacao__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(camera, photoPrvd, db, toastCtrl, angFireAuth, barcodeprvd, alertCtrl, navCtrl, rangeProvider, localPrvd) {
        this.camera = camera;
        this.photoPrvd = photoPrvd;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.angFireAuth = angFireAuth;
        this.barcodeprvd = barcodeprvd;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.rangeProvider = rangeProvider;
        this.localPrvd = localPrvd;
        try {
            this.lista = db.list('/caminho_das_imagens/');
        }
        catch (error) {
            console.log(error);
        }
        this.range = this.rangeProvider.range;
        this.localAtualLat = this.localPrvd.localizacaoLat;
        this.localAtualLng = this.localPrvd.localizacaoLng;
    }
    HomePage.prototype.pickImageFromGallery = function () {
        var _this = this;
        try {
            //Só pode pegar imagem com login
            if (this.angFireAuth.auth.currentUser != null) {
                this.camera.getPicture({
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                    allowEdit: true
                }).then(function (imageData) {
                    _this.base64Image = "data:image/jpeg;base64," + imageData;
                    _this.photoPrvd.uploadPhoto(_this.base64Image);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                //Alerta caso não teha login
                this.alerta();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    HomePage.prototype.takePicture = function () {
        var _this = this;
        try {
            //Só pode pegar imagem com login
            if (this.angFireAuth.auth.currentUser != null) {
                this.camera.getPicture({
                    destinationType: this.camera.DestinationType.DATA_URL,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    encodingType: this.camera.EncodingType.PNG,
                    saveToPhotoAlbum: true,
                    allowEdit: true
                }).then(function (imageData) {
                    _this.base64Image = "data:image/jpeg;base64," + imageData;
                    _this.photoPrvd.uploadPhoto(_this.base64Image);
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                //Alerta caso não teha login
                this.alerta();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    /*
    baixarArquivo(nome: string){
        let storageRef = firebase.storage().ref('/Users/');
        let caminho = storageRef.child('images/'+nome);
        caminho.getDownloadURL().then(url => {
           console.log(url); // AQUI VOCÊ JÁ TEM O ARQUIVO
        });
    }
    */
    HomePage.prototype.codigoBarras = function () {
        //Código de barras -> Única coisa que não me deu trabalho nessa porra :)
        this.barcodeprvd.alertaCodBarras();
    };
    HomePage.prototype.salvarPromocao = function (promo) {
        try {
            if (this.angFireAuth.auth.currentUser != null) {
                this.promocoeslista = this.db.list('/promocoes_salvas/'
                    + this.angFireAuth.auth.currentUser.uid);
                this.promocoeslista.push(promo);
                var toast = this.toastCtrl.create({
                    message: 'Promocao salva',
                    duration: 3000
                });
                toast.present();
            }
            else {
                this.alerta();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    HomePage.prototype.alerta = function () {
        var _this = this;
        var alerta = this.alertCtrl.create({
            title: 'Voce não está logado.',
            message: 'Você precisa estar logado para salvar suas promoções!',
            buttons: [
                {
                    text: 'Fazer login',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__autenticacao_autenticacao__["a" /* AutenticacaoPage */]);
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        });
        alerta.present();
    };
    HomePage.prototype.irParaMapa = function (img_selec) {
        try {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mapapromocoes_mapapromocoes__["a" /* MapapromocoesPage */], img_selec);
        }
        catch (error) {
            console.log(error);
        }
    };
    HomePage.prototype.Range = function () {
        if (!this.range)
            this.range = 0;
        console.log(this.range);
        alert(this.range);
    };
    HomePage.prototype.calcularDistancia = function () {
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
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    <ion-header>\n        <ion-navbar>\n            <ion-title>Recomendado para você</ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-card *ngFor="let imgs of lista | async">\n        <img src="{{imgs.url}}"/>\n        <ion-card-content>\n            <ion-card-title>\n                {{imgs.nome}}\n            </ion-card-title>\n            <p>\n                {{imgs.local}}\n            </p>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col>\n                <button ion-button clear small color="danger" icon-start (click)="salvarPromocao(imgs)">\n                <ion-icon name=\'heart\'></ion-icon>\n                    Salvar\n                </button>\n            </ion-col>\n            <ion-col text-right>\n                <button ion-button clear small color="laranja" icon-start (click)="irParaMapa(imgs)" >\n                <ion-icon name=\'pin\'></ion-icon>\n                    Mostrar no mapa\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <button ion-button block (click)="Range()">Range</button>\n\n    <!--ion-card-content>\n        Latest Picture:\n        <img [src]="base64Image" *ngIf="base64Image" />\n    </ion-card-content-->\n\n\n\n    <ion-fab right bottom>\n        <button ion-fab color="verde">\n            <ion-icon name="add"></ion-icon>\n        </button>\n        <ion-fab-list side="top">\n            \n            <button ion-fab (click)="takePicture()"><ion-icon name="camera"></ion-icon></button>\n            <button ion-fab (click)="pickImageFromGallery()"><ion-icon name="photos"></ion-icon></button>\n            <button ion-fab (click)="codigoBarras()"><ion-icon name="barcode"></ion-icon></button>\n        \n        </ion-fab-list>\n    </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__providers_photo_photo__["a" /* PhotoProvider */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__providers_barcode_barcode__["a" /* BarcodeProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_range_range__["a" /* RangeProvider */],
        __WEBPACK_IMPORTED_MODULE_10__providers_localizacao_localizacao__["a" /* LocalizacaoProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__criarconta_criarconta__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__promocoessalvas_promocoessalvas__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_range_range__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var User = (function () {
    function User() {
    }
    return User;
}());

var AutenticacaoPage = (function () {
    function AutenticacaoPage(navCtrl, navParams, toastCtrl, alertCtrl, angFireAuth, authService, carregarCtrl, geolocation, geocoder, rangeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.angFireAuth = angFireAuth;
        this.authService = authService;
        this.carregarCtrl = carregarCtrl;
        this.geolocation = geolocation;
        this.geocoder = geocoder;
        this.rangeProvider = rangeProvider;
        this.user = new User();
        this.versao = "FREE";
        this.localizacao = "";
        this.areaAdm = " - ";
        this.range = 0;
        try {
            if (this.angFireAuth.auth.currentUser == null) {
                this.logado = false;
                this.naologado = true;
            }
            else {
                this.nome = this.angFireAuth.auth.currentUser.displayName;
                this.email = this.angFireAuth.auth.currentUser.email;
                this.logado = true;
                this.naologado = false;
            }
        }
        catch (error) {
            console.log(error);
        }
        this.range = this.rangeProvider.range;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.geocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then(function (result) {
                console.log(JSON.stringify(result));
                _this.localizacao = result.locality.toLocaleUpperCase();
                _this.areaAdm += result.administrativeArea.toLocaleUpperCase();
            })
                .catch(function (error) {
                console.log(error);
                var toast = _this.toastCtrl.create({ duration: 3000, message: _this.localizacao });
                toast.present();
            });
        }).catch(function (error) {
            var toast = _this.toastCtrl.create({ message: error, duration: 3000 });
            toast.present();
            console.log('Error getting location', error);
        });
        console.log(this.range);
    }
    AutenticacaoPage.prototype.signIn = function () {
        var _this = this;
        var carregando = this.carregarCtrl.create({
            content: "Entrando...",
            duration: 500
        });
        if (this.user.email.indexOf('@') == -1)
            this.user.email = this.user.email + '@uft.edu.br';
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(function () {
                carregando.present(); // CARREGANDO
                _this.authService.blockLogin = true; // bloqueia a página de login
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); // entra na pagina Home
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não foi encontrado.');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha digitada não é valida.');
                }
                toast.present();
            });
        }
    };
    AutenticacaoPage.prototype.signOut = function () {
        var carregando = this.carregarCtrl.create({
            content: "Saindo...",
            duration: 500
        });
        this.authService.signOutFirebase();
        carregando.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AutenticacaoPage.prototype.openPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__criarconta_criarconta__["a" /* CriarContaPage */]);
    };
    AutenticacaoPage.prototype.signInWithFacebook = function () {
        this.authService.signInWithFacebook();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    AutenticacaoPage.prototype.abrirPaginaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    AutenticacaoPage.prototype.deletarConta = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            duration: 3000,
            message: 'Conta excluída com sucesso!'
        });
        var alert = this.alertCtrl.create({
            title: 'Você está certo disso?',
            subTitle: 'Você está prestes a excluir sua conta',
            buttons: [
                {
                    text: 'Cancelar',
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.authService.deleteAccount().
                            catch(function (err) {
                            console.log(err);
                        });
                        toast.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    AutenticacaoPage.prototype.abrirPromocoesSalvas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__promocoessalvas_promocoessalvas__["a" /* PromocoessalvasPage */]);
    };
    AutenticacaoPage.prototype.salvarConfigs = function () {
        this.rangeProvider.setRange(this.range);
    };
    return AutenticacaoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('form'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
], AutenticacaoPage.prototype, "form", void 0);
AutenticacaoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-autenticacao',template:/*ion-inline-start:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/autenticacao/autenticacao.html"*/'<ion-header>\n    <ion-navbar color="laranja">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            MINHA CONTA\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="signOut()" *ngIf="logado">sair</button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n\n\n  \n  \n<ion-content padding>\n\n    <button ion-button (click)="signInWithFacebook()" block color="facebook" *ngIf="naologado">\n        FACEBOOK\n    </button>\n\n    <br *ngIf="naologado">\n\n  \n    <button ion-button block color="primary" (click)="abrirPaginaLogin()" *ngIf="naologado">\n        ENTRAR\n    </button>\n    \n    <br *ngIf="naologado">\n  \n    <button ion-button block clear (click)="openPage()" *ngIf="naologado">\n        OU CRIAR UMA CONTA\n    </button>\n\n\n    <ion-card *ngIf="logado" >\n        <ion-card-header>            \n            {{email}}\n        </ion-card-header>\n        <ion-list>\n            <button ion-item>\n                <ion-icon name="locate" item-start color="laranja"></ion-icon>\n                {{localizacao}} {{areaAdm}}\n            </button>\n            <button ion-item>\n                <ion-icon name="ribbon" item-start color="laranja"></ion-icon>\n                VERSÃO {{versao}}\n            </button>\n            <button ion-item (click)="abrirPromocoesSalvas()">\n                <ion-icon name="list" item-start color="laranja"></ion-icon>\n                PROMOÇÕES SALVAS\n            </button>\n        </ion-list>\n    </ion-card>\n\n    <ion-list *ngIf="logado">\n        <ion-list-header>\n            CONFIGURAÇÃOES\n        </ion-list-header>\n        <ion-item>\n            <ion-range min="0" max="80" step="5" pin="true" snaps="true" [(ngModel)]="range" color="laranja" (ionChange)="salvarConfigs()">\n                <ion-icon range-left small color="laranja" name="funnel"></ion-icon>\n                <ion-icon range-right color="laranja" name="funnel"></ion-icon>\n            </ion-range>\n        </ion-item>\n    </ion-list>\n    \n\n    <ion-footer no-shadow *ngIf="logado">\n        <ion-toolbar position="bottom">\n            <button ion-button color="danger" block (click)="deletarConta()">\n                EXCLUIR MINHA CONTA\n            </button>\n        </ion-toolbar>\n    </ion-footer>    \n  \n</ion-content>\n\n'/*ion-inline-end:"/home/fernando/Documentos/UFT/Hibridos/hibridos/src/pages/autenticacao/autenticacao.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_11__providers_range_range__["a" /* RangeProvider */]])
], AutenticacaoPage);

//# sourceMappingURL=autenticacao.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = (function () {
    function User() {
    }
    return User;
}());

var AuthProvider = (function () {
    function AuthProvider(autenticacaoAF, facebook, toastCtrl) {
        this.autenticacaoAF = autenticacaoAF;
        this.facebook = facebook;
        this.toastCtrl = toastCtrl;
        this.blockLogin = false;
    }
    AuthProvider.prototype.createUser = function (user) {
        return this.autenticacaoAF.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider.prototype.signIn = function (user) {
        return this.autenticacaoAF.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthProvider.prototype.signOutFirebase = function () {
        return this.autenticacaoAF.auth.signOut();
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.autenticacaoAF.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.signInWithFacebook = function () {
        var _this = this;
        return this.facebook.login(['public_profile', 'email'])
            .then(function (res) {
            return _this.autenticacaoAF.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken));
        })
            .catch(function (e) {
            var alerta = _this.toastCtrl.create({
                duration: 3000,
                position: 'top'
            });
            alerta.setMessage(e);
            alerta.present();
        });
    };
    AuthProvider.prototype.signOut = function () {
        var _this = this;
        if (this.autenticacaoAF.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.autenticacaoAF.auth.currentUser.providerData.length; i++) {
                var provider = this.autenticacaoAF.auth.currentUser.providerData[i];
                if (provider.providerId == __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider.PROVIDER_ID) {
                    return this.facebook.logout().then(function () {
                        return _this.signOutFirebase();
                    });
                }
            }
        }
        return this.signOutFirebase();
    };
    AuthProvider.prototype.deleteAccount = function () {
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
        }
        catch (err) {
            console.log(JSON.stringify(err));
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ })

},[314]);
//# sourceMappingURL=main.js.map