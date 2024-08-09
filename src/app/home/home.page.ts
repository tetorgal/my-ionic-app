import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('mapId', { static: true }) mapElement!: ElementRef;
  map!: L.Map;

  constructor() { }

  ngOnInit() {
    console.log("init home");
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  async loadMap() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.initMap(coordinates.coords.latitude, coordinates.coords.longitude);
  }

  initMap(lat: number, lon: number) {
    this.map = L.map(this.mapElement.nativeElement).setView([lat, lon], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([lat, lon]).addTo(this.map)
      .bindPopup("<b>Hello world!</b><br>Estoy aqui").openPopup();
  }

  async ubicacion(){
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates.coords);
    await this.getAddress(coordinates.coords.latitude,
      coordinates.coords.longitude)
  }

  async getAddress(lat:any,lon:any){

    this.map=new L.Map('mapId').setView([lat,lon], 14)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>&#39'
    }).addTo(this.map);
    L.marker([lat,lon]).addTo(this.map)
    .bindPopup("<b>Hello world!</b><br>Estoy aqui").openPopup();
    }
}