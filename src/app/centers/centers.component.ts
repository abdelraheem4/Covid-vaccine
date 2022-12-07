import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { Toast, ToastrService } from 'ngx-toastr';
import { HomeService } from '../Services/home.service';
import { VaccinesService } from '../Services/vaccines.service';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})

export class CentersComponent implements AfterViewInit {
  
  constructor(public vaccines:VaccinesService,public home:HomeService,private toastr:ToastrService) {

    
    render(
      {
          id: "#payments",
          currency: "USD",
          value: "5.00",

          onApprove: (resp:any)=>{
            this.toastr.success("thanks for donation")
      
          }
        }
      );
   }
   ngOnInit(): void {
    this.home.getAllVacciniationCentre();
    console.log(this.home.allVacciniationCentre[0].centeraddres)
  }


  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 32.01698046202276; 
  lng = 35.869886335648424;
  markers:any[] = [
    {
      position: new google.maps.LatLng(this.home.allVacciniationCentre[0].centeraddres),
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.02610529058295, 35.866810706305166),
      title: "Marker 2"
    }
  ];

  // public printToConsole():void{
  //   for (let i=0; i < 10; i++){
  //     var markobj = {
  //     position: new google.maps.LatLng(32.01786157064824, 35.863752230581575),
  //       title: ''
  //     }
  //     this.markers.push(markobj);
  //   }
  // }

  


  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 14
  };

  marker = new google.maps.Marker({
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
    this.marker.setMap(this.map);
    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });
//Adding default marker to map
this.marker.setMap(this.map);

//Adding other markers
this.loadAllMarkers();
  }
loadAllMarkers(): void {
  this.markers.forEach(markerInfo => {
    //Creating a new marker object
    const marker = new google.maps.Marker({...markerInfo
    });

    //creating a new info window with markers info
    const infoWindow = new google.maps.InfoWindow({
      content: marker.getTitle()
    });

    //Add click event to open info window on marker
    marker.addListener("click", () => {
      infoWindow.open(marker.getMap(), marker);
    });

    //Adding marker to google map
    marker.setMap(this.map);
  });

}

  
}


