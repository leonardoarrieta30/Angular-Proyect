import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-schedule-doctor',
  templateUrl: './schedule-doctor.component.html',
  styleUrls: ['./schedule-doctor.component.css']
})
export class ScheduleDoctorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected!: Date | null;

  horarios=[
    {
      'range':'08:00am - 08:30am',
      'patient':'patient 1'
    },
    {
      'range':'08:30am - 09:00am',
      'patient':'patient 2'
    },
    {
      'range':'09:00am - 09:30am',
      'patient':'patient 3'
    },
    {
      'range':'09:30am - 10:00am',
      'patient':'patient 4'
    },
    {
      'range':'10:00am - 10:30am',
      'patient':'patient 5'
    },
    {
      'range':'10:30am - 11:00am',
      'patient':'patient 6'
    },
    {
      'range':'11:00am - 11:30am',
      'patient':'patient 7'
    },
    {
      'range':'11:30am - 12:00pm',
      'patient':'patient 8'
    },
    {
      'range':'02:00pm - 02:30pm',
      'patient':'patient 9'
    },
    {
      'range':'02:30pm - 03:00pm',
      'patient':'patient 10'
    }
  ]



}
