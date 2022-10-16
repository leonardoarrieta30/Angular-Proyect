import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FilesUsersService} from "../../../service/profilesimg.service";
import {MatTableDataSource} from "@angular/material/table";
import {FilesUsers} from "../../../dermApp/model/FilesUsers";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  hide = true;
  public preview: string | undefined;
  public dataimage1 : string | undefined ;
  public files : any = [];
  dataSource: MatTableDataSource<any>;
  FilesImgData: FilesUsers;
  FilesImgDataForm: FormGroup;

  constructor(private sanitizer: DomSanitizer, private  rest: FilesUsersService, private builder: FormBuilder) {
    this.dataSource = new MatTableDataSource<any>();
    this.FilesImgData = {} as FilesUsers;
    this.FilesImgDataForm = this.builder.group({
      filename: [''],
    })
  }

  ngOnInit(): void {
  }

  options = [
    { path: '/home', title: 'Home'},
    ]

  capture_file(event: any){
    const capture_image = event.target.files[0];
    this.extractBase64(capture_image).then((image :any) => {
      this.preview = image.base;
      this.dataimage1 = event.target.files[0].name;
    })
    this.files.push(capture_image);
  }

  Uploadfile(): any{
    try {

      const formData = new FormData();
      this.files.forEach((file :any)  => {
        formData.append('files', file)

       this.rest.create(this.FilesImgDataForm.value)
          .subscribe(res => {

            console.log(this.FilesImgDataForm.value);
            console.log('correct',res);
          })
      })


    } catch (e){
      console.log('Error', e);
    }
  }

  extractBase64 = async ($event:any) => new Promise((resolve, reject)=>{
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
        reader.onerror = error =>{
          resolve({
            base:null
          });
        };
      } catch (e){
      return ;
    }
  })



}
// import { Component,OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-register-form',
//   templateUrl: './register-form.component.html',
//   styleUrls: ['./register-form.component.css']
// })
// export class RegisterFormComponent implements OnInit {
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//   valor1=0;
//   valor2=0;
//   resultado=0;
//
//   sumar() {
//     this.resultado = this.valor1 + this.valor2;
//   }
// }
