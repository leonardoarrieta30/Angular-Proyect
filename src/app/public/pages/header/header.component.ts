import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { path: '/home', title: 'Home'},
    { path: '/about', title: 'About'},
    { path: '/login', title: 'Login'},
    { path: '/sign-in', title: 'Sing In'},
    // { path: '/character', title: 'Character'},

  ]
  // options2=[
  //   { path: '/character', title: 'Character'},
  //   { path: '/dermatologist'}
  // ]

}
