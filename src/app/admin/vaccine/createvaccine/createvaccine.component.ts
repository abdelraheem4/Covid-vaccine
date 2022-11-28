import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-createvaccine',
  templateUrl: './createvaccine.component.html',
  styleUrls: ['./createvaccine.component.css']
})
export class CreatevaccineComponent implements OnInit {

  constructor(private home:VaccinesService) { }
  createForm:FormGroup = new FormGroup ({
    vaccinename:new FormControl('',Validators.required),
    vaccinedoses:new FormControl('',Validators.required),
    vaccineexp:new FormControl('',Validators.required)

  })
  ngOnInit(): void {
  }
  saveData(){
    this.home.createVaccine(this.createForm.value)
  }

}
