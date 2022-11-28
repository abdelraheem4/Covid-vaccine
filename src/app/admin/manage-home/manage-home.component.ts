import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {

  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllHome();
  }
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>
  @ViewChild('callUpdateTest') callUpdateTest!:TemplateRef<any>
  @ViewChild('callDeleteTest') callDeleteTest!:TemplateRef<any>
  idtest:number = 0;  

  createform :FormGroup= new FormGroup({
        imagelogo: new FormControl('', [Validators.required]),
         littletitle1: new FormControl('', [Validators.required]),
         title1 : new FormControl('', [Validators.required]),
         descriptiontitle1 : new FormControl('', [Validators.required]),
         imagetitle1 : new FormControl('', [Validators.required]),
         textbutton : new FormControl('', [Validators.required]),
         statisticstitle : new FormControl('', [Validators.required]),
         descriptionstatistics : new FormControl('', [Validators.required]),
         desc1statistics : new FormControl('', [Validators.required]),
         desc2statistics : new FormControl('', [Validators.required]),
         desc3statistics : new FormControl('', [Validators.required]),
         newstitle : new FormControl('', [Validators.required]),
         newsimage1 : new FormControl('', [Validators.required]),
         newsimage2 : new FormControl('', [Validators.required]),
         newsimage3 : new FormControl('', [Validators.required]),
         newsdesc1 : new FormControl('', [Validators.required]),
         newsdesc2 : new FormControl('', [Validators.required]),
         newsdesc3 : new FormControl('', [Validators.required]),
  })
  uploadimagelogo(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  uploadimagetitle1(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  uploadnewsImage1(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  uploadnewsImage2(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  uploadnewsImage3(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  updateform :FormGroup= new FormGroup({
    idtest:new FormControl(),
    message:new FormControl('', [Validators.required]),
    userid:new FormControl()
  })
  counter:number = 0;

  openCreateDialog(){
    this.dialog.open(this.callCrateTest);
   }
   saveData(){
     this.home.createTestmonial(this.createform.value);
   }
   p_data:any = {}; 
   openUpdateDialog(obj:any){
     this.p_data={
       idtest:obj.idtest,
       message:obj.message,
       userid:obj.userid
     }
     this.updateform.controls['idtest'].setValue(this.p_data.idtest);
     this.updateform.controls['userid'].setValue(this.p_data.userid);
 
     this.dialog.open(this.callUpdateTest);
   }
   
   saveupdateData(){
     this.home.updateTestmonial(this.updateform.value);
   }
   openDeleteDialog(id:number){
     const dialogRef = this.dialog.open(this.callDeleteTest);
     dialogRef.afterClosed().subscribe((res)=>{
         if(res != undefined){
           if(res == 'yes')
           this.home.deleteTestmonial(id);
           else
           console.log('Good Choice');
         }
     })
   }
 

}
