import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private spinner:NgxSpinnerService){
  
}


  title = 'EduTeach';
  name: string = '';
email: string = ''; salary: number = 0;
}
