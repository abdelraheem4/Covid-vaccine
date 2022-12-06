// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MapInfoWindow , } from '@angular/google-maps';

// @Component({
//   selector: 'app-map-window',
//   templateUrl: './map-window.component.html',
//   styleUrls: ['./map-window.component.css']
// })
// export class MapWindowComponent implements OnInit {
//   adrees :any={};
//   constructor() { }

//   ngOnInit(): void {}
//   display: any;
//   @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined ;
//   center: google.maps.LatLngLiteral = {
//       lat: 24,
//       lng: 12
//   };
//   markerPositions: google.maps.LatLngLiteral[] = [];
//   zoom = 4;
//   addMarker(event: google.maps.MapMouseEvent) {
//       if (event.latLng != null){ 
//       this.markerPositions.push(event.latLng.toJSON());
      
//       }
//   }
//   openInfoWindow(marker: MapMarker) {
//       if (this.infoWindow != undefined) this.infoWindow.open(marker);
//   }

// }
