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
    vaccines_name:new FormControl('',Validators.required),
    vaccine_doses:new FormControl('',Validators.required),
    vaccine_sexp:new FormControl('',Validators.required)

  })
  ngOnInit(): void {
  }
  saveData(){
    this.home.createVaccine(this.createForm.value)
  }

}
