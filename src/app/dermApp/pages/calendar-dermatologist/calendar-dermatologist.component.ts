import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar-dermatologist',
  templateUrl: './calendar-dermatologist.component.html',
  styleUrls: ['./calendar-dermatologist.component.css']
})
export class CalendarDermatologistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



}
