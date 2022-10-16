import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./public/pages/home-page/home-page.component";
import {RegisterFormComponent} from "./public/auth/register-form/register-form.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {LoginFormComponent} from "./public/auth/login-form/login-form.component";
import {TypeOfUserComponent} from "./public/auth/type-of-user/type-of-user.component";
import {ScheduleDoctorComponent} from "./dermApp/pages/dermatologist/schedule-doctor/schedule-doctor.component";
import {ListPatientsComponent} from "./dermApp/pages/dermatologist/list-patients/list-patients.component";
import {ProfileDermatologistComponent} from "./dermApp/pages/dermatologist/profile-dermatologist/profile-dermatologist.component";
import {CalendarDermatologistComponent} from "./dermApp/pages/dermatologist/calendar-dermatologist/calendar-dermatologist.component";
import {ViewDermatologistComponent} from "./dermApp/pages/dermatologist/view-dermatologist/view-dermatologist.component";
import {ChatDermatologistComponent} from "./dermApp/pages/dermatologist/chat-dermatologist/chat-dermatologist.component";
import {
  AnalyticsDermatologistComponent
} from "./dermApp/pages/dermatologist/analytics-dermatologist/analytics-dermatologist.component";
import {
  EditProfileDermatologistComponent
} from "./dermApp/pages/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component";
import {VisitorViewComponent} from "./public/pages/visitor-view/visitor-view.component";
import {InfoPatientSpecificComponent} from "./dermApp/pages/dermatologist/info-patient-specific/info-patient-specific.component";
import {ViewPatientComponent} from "./dermApp/pages/patient/view-patient/view-patient.component";
import {HomePatientComponent} from "./dermApp/pages/patient/home-patient/home-patient.component";
import {MyFilesPatientComponent} from "./dermApp/pages/patient/my-files-patient/my-files-patient.component";
import {MyDoctorPatientComponent} from "./dermApp/pages/patient/my-doctor-patient/my-doctor-patient.component";
import {MessagesPatientComponent} from "./dermApp/pages/patient/messages-patient/messages-patient.component";
import {RemindersPatientComponent} from "./dermApp/pages/patient/reminders-patient/reminders-patient.component";
import {ProfilePatientComponent} from "./dermApp/pages/patient/profile-patient/profile-patient.component";
import {EditProfilePatientComponent} from "./dermApp/pages/patient/edit-profile-patient/edit-profile-patient.component";

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'students', component: StudentsComponent},
  // { path: 'instructors', component: InstructorsComponent },
  // { path: '**', component: PageNotFoundComponent }
  { path: '', component: VisitorViewComponent, children:[
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sign-in', component: RegisterFormComponent },
      { path: 'login', component:LoginFormComponent},
      { path: 'home', component: HomePageComponent },
    ]},

  { path: '', component: ViewPatientComponent, children:[
      { path: 'home-patient', component: HomePatientComponent },
      { path: 'files-patient', component: MyFilesPatientComponent },
      { path: 'myDoctor-patient', component: MyDoctorPatientComponent },
      { path: 'messages-patient', component:MessagesPatientComponent},
      { path: 'reminders-patient', component: RemindersPatientComponent },
      { path: 'profile-patient', component: ProfilePatientComponent },
      {path:'edit-profile-patient',component:EditProfilePatientComponent},
    ]},
  //
  // { path: '', redirectTo: 'home', pathMatch: 'full'},

  // { path: 'sign in', component: RegisterFormComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'login', component:LoginFormComponent},

  { path: 'character', component:TypeOfUserComponent},
  { path: 'view-dermatologist',loadChildren:()=>import('src/app/dermApp/pages/dermatologist/shared/shared.module').then(x=>x.SharedModule)},
  { path: 'dermatologist', component:ScheduleDoctorComponent},
  {path:'',component:ViewDermatologistComponent,children:[
      // {path:'',component:ScheduleDoctorComponent},
      {path:'chats',component:ChatDermatologistComponent},
      {path:'analytics',component:AnalyticsDermatologistComponent},
      {path:'calendar',component:CalendarDermatologistComponent},
      {path:'patients',component:ListPatientsComponent},
      {path:'profile',component:ProfileDermatologistComponent},
      {path:'edit-profile',component:EditProfileDermatologistComponent},
      {path: 'infoPatientSpecific', component:InfoPatientSpecificComponent}
    ]}
  // {path:'chats',component:ListPatientsComponent},
  // {path:'analytics',component:ListPatientsComponent},
  // {path:'calendar',component:CalendarDermatologistComponent},
  // // {path:'patients',component:ListPatientsComponent},
  // {path:'profile',component:ProfileDermatologistComponent},

  // { path: 'chats', component:ScheduleDoctorComponent},
  // { path: 'analytics', component:ScheduleDoctorComponent},
  // { path: 'calendar', component:ScheduleDoctorComponent},
  // { path: 'patients', component:ListPatientsComponent},
  // { path: 'profile', component:ScheduleDoctorComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
