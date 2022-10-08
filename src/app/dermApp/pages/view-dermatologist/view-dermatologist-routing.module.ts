import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPatientsComponent} from "../list-patients/list-patients.component";
import {ScheduleDoctorComponent} from "../schedule-doctor/schedule-doctor.component";
import {ProfileDermatologistComponent} from "../profile-dermatologist/profile-dermatologist.component";
import {CalendarDermatologistComponent} from "../calendar-dermatologist/calendar-dermatologist.component";
import {ViewDermatologistComponent} from "./view-dermatologist.component";
import {ChatDermatologistComponent} from "../chat-dermatologist/chat-dermatologist.component";
import {AnalyticsDermatologistComponent} from "../analytics-dermatologist/analytics-dermatologist.component";

const routes: Routes = [
  // {path:'',component:ViewDermatologistComponent,children:[
  //     {path:'',component:ScheduleDoctorComponent},
  //     {path:'chats',component:ChatDermatologistComponent},
  //     {path:'analytics',component:AnalyticsDermatologistComponent},
  //     {path:'calendar',component:CalendarDermatologistComponent},
  //     {path:'patients',component:ListPatientsComponent},
  //     {path:'profile',component:ProfileDermatologistComponent},
  //  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarDermatologistRoutingModule { }
