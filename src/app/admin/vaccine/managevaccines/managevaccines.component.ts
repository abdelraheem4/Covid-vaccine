import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VaccinesService } from 'src/app/Services/vaccines.service';
import { CreatevaccineComponent } from '../createvaccine/createvaccine.component';

@Component({
  selector: 'app-managevaccines',
  templateUrl: './managevaccines.component.html',
  styleUrls: ['./managevaccines.component.css']
})
export class ManagevaccinesComponent implements OnInit {


  constructor(private route:Router,public vaccines:VaccinesService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vaccines.getall();
  }
  opendialog(){
    this.dialog.open(CreatevaccineComponent)
  }

}
