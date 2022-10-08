import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  firstname:string="Leonardo";
  lastname:string="Arrieta";
  username:string="leoarru30";
  password:string="123456789";

  constructor() { }

  ngOnInit(): void {
  }

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
