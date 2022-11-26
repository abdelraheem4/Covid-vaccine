import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-managevaccines',
  templateUrl: './managevaccines.component.html',
  styleUrls: ['./managevaccines.component.css']
})
export class ManagevaccinesComponent implements OnInit {

  @Input() id:number=0;
  @Input() Vaccinename:string='N/A';
  @Input() Vaccinedoses:number=0;
  @Input() Vaccineexp:string|undefined;


  constructor(private route:Router,public vaccines:VaccinesService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.vaccines.getall();
  }

}
