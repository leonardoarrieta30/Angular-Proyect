import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ScheduleDoctorComponent} from "../schedule-doctor/schedule-doctor.component";

@Component({
  selector: 'app-header-dermatologist',
  templateUrl: './header-dermatologist.component.html',
  styleUrls: ['./header-dermatologist.component.css']
})
export class HeaderDermatologistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  show:Boolean = false;

  options = [
    { path: '/chats', title: 'Chats'},
    { path: '/analytics', title: 'Analytics'},
    { path: '/calendar', title: 'Calendar'},
    { path: '/patients', title: 'Patients'},
    { path: '/profile', title: 'Profile'},
  ]
  // navigateToCalendar(){
  //    this.router.navigate(['calendar'])}
  //   this.router.navigate(['analytics'])}
  //    this.router.navigate(['calendar'])
  //    this.router.navigate(['patients'])}
  //
  // }
  // navigatetoLogin(){
  //   setTimeout(()=>{
  //     this.router.navigate(['dermatologist'])
  //   },1500);
  // }
}
