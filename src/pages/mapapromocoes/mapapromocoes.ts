import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google;
 
@Component({
    selector: 'page-mapapromocoes',
    templateUrl: 'mapapromocoes.html',
})

export class MapapromocoesPage {
 
    @ViewChild('map') mapElement: ElementRef;
    map: any;
    img_selec;
    local: string = "";
    loading: any;
 
    constructor(
        private geolocation: Geolocation,
        private navPrms: NavParams,
        private geocoder: NativeGeocoder,
        private loadingCtrl: LoadingController
    ) {
        this.img_selec = this.navPrms.data;
        this.loading = this.loadingCtrl.create({
            content: 'Carregando mapa...'            
        });
        this.loading.present();
        
        this.loadMap();
    }
 
    loadMap(){
        
        this.geolocation.getCurrentPosition().then((position) => {
 
        let latLng = new google.maps.LatLng(this.img_selec.latitude, this.img_selec.longitude);

        this.geocoder.reverseGeocode(this.img_selec.latitude, this.img_selec.longitude)
        .then((result: NativeGeocoderReverseResult) =>{
        console.log(JSON.stringify(result));
        this.local = result.subLocality.toLocaleUpperCase();
        })
        .catch((error) => {
            console.log(error)
        });
 
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
 
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();

        this.loading.dismissAll();
        
        },
        (err) => {
            console.log(err);
        });
 
    }

    addMarker(){
 
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
 
        let content = "<h4>"+this.img_selec.nome+"</h4>"+"<br>"+this.local;          
 
        this.addInfoWindow(marker, content);
 
    }

    addInfoWindow(marker, content){
 
        let infoWindow = new google.maps.InfoWindow({
            content: content
        });
 
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });
 
    }
}
