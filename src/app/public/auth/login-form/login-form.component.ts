import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Input() name:string="Leo";

  users=[
    {
      value:'Patient',
      viewValue:'patient '

    },
    {
      value:'Dermatologist',
      viewValue:'Dermatologist'
    }

  ]

  // navigatetoLogin(){
  //
  //     this.router.navigate(['view-dermatologist'])
  // }

}
