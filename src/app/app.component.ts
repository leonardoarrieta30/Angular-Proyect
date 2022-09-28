import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DermAPP';

  options = [
    { path: '/home', title: 'Home'},
    { path: '/patients', title: 'Patients'},
    { path: '/instructors', title: 'Instructors'},
    { path: '/about', title: 'About'}
    ]
}
