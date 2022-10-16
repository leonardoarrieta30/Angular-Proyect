import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-patient',
  templateUrl: './header-patient.component.html',
  styleUrls: ['./header-patient.component.css']
})
export class HeaderPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options = [
    { path: '/home-patient', title: 'Home'},
    { path: '/files-patient', title: 'Files'},
    { path: '/myDoctor-patient', title: 'My Doctor'},
    { path: '/messages-patient', title: 'Messages'},
    { path: '/reminders-patient', title: 'Reminders'},
    { path: '/profile-patient', title: 'Profile'},
  ]
}
