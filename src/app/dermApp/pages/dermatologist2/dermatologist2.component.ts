import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dermatologist2',
  templateUrl: './dermatologist2.component.html',
  styleUrls: ['./dermatologist2.component.css']
})
export class Dermatologist2Component implements OnInit {

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



  pacientes=[

    {
      'name':'Leonardo Arrieta',
      'status':'In treatment',
      'enfermedad':'Atopic dermatitis'
    },
    {
      'name':'Julio raro',
      'status':'In treatment',
      'enfermedad':'Psoriasis'
    },
    {
      'name':'Milagros Huaman',
      'status':'In treatment',
      'enfermedad':'Undetermined'
    },
    {
      'name':'jessica turbio',
      'status':'In treatment',
      'enfermedad':'Melanoma'
    },
    {
      'name':'Seuldo Rapu',
      'status':'In treatment',
      'enfermedad':'Acne'
    },
    {
      'name':'Pablo galvan',
      'status':'In treatment',
      'enfermedad':'Undetermined'
    },
    {
      'name':'Paolo fuentes',
      'status':'In treatment',
      'enfermedad':'Psoriasis'
    }
  ]
  notes=[
    {
      'name':'Dr Angulo'
    }
  ]



  constructor() { }

  ngOnInit(): void {


  }

}
