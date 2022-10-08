import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // options = [
  //   { path: '/home', title: 'Home'},
  //   { path: '/students', title: 'Students'},
  //   { path: '/instructors', title: 'Instructors'},
  //   { path: '/about', title: 'About'},
  //   { path: '/suscribe', title: 'Suscribe'}
  // ]

  constructor() { }

  ngOnInit(): void {
  }


}
