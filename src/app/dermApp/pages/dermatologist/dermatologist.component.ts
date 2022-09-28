import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dermatologist',
  templateUrl: './dermatologist.component.html',
  styleUrls: ['./dermatologist.component.css']
})
export class DermatologistComponent implements OnInit {



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


  constructor() { }

  ngOnInit(): void {

    // this.getDaysFromDate(11,2020);
  }

  // getDaysFromDate(month, year){
  //   const startDate = moment.utc(`${year}/${month}/01`);
  //   const endDate = startDate.clone().endOf('month');
  //   this.dateSelect = startDate;
  //
  //   const diffDays=endDate.diff(startDate,'days',true);
  //
  //   const numberDays = Math.round(diffDays); //31
  //
  //   const arrayDays=Object.keys([...Array(numberDays)]).map((a:any)=>{
  //       console.log(a);
  //   });
  //
  //
  // }

}
