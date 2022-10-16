import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

import { ScheduleDoctorComponent } from './dermApp/pages/dermatologist/schedule-doctor/schedule-doctor.component';

import { HomePageComponent } from './public/pages/home-page/home-page.component';
import { HeaderComponent } from './public/pages/header/header.component';

import { RegisterFormComponent } from './public/auth/register-form/register-form.component';

import { AboutComponent } from './public/pages/about/about.component';
import { LoginFormComponent } from './public/auth/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import {PatientsService} from "./dermApp/services/patients.service";
import { TypeOfUserComponent } from './public/auth/type-of-user/type-of-user.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderDermatologistComponent } from './dermApp/pages/dermatologist/header-dermatologist/header-dermatologist.component';
import { ListPatientsComponent } from './dermApp/pages/dermatologist/list-patients/list-patients.component';

import { CalendarDermatologistComponent } from './dermApp/pages/dermatologist/calendar-dermatologist/calendar-dermatologist.component';
import { ProfileDermatologistComponent } from './dermApp/pages/dermatologist/profile-dermatologist/profile-dermatologist.component';
import { ViewDermatologistComponent } from './dermApp/pages/dermatologist/view-dermatologist/view-dermatologist.component';
import { ChatDermatologistComponent } from './dermApp/pages/dermatologist/chat-dermatologist/chat-dermatologist.component';
import { AnalyticsDermatologistComponent } from './dermApp/pages/dermatologist/analytics-dermatologist/analytics-dermatologist.component';
import {SharedModule} from "./dermApp/pages/dermatologist/shared/shared.module";
import {DermatologistsService} from "./dermApp/services/dermatologists.service";
import { EditProfileDermatologistComponent } from './dermApp/pages/dermatologist/edit-profile-dermatologist/edit-profile-dermatologist.component';
import { BottomSheetComponent } from './dermApp/pages/dermatologist/bottom-sheet/bottom-sheet.component';
import { VisitorViewComponent } from './public/pages/visitor-view/visitor-view.component';
import { InfoPatientSpecificComponent } from './dermApp/pages/dermatologist/info-patient-specific/info-patient-specific.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import { CardPDermatologistComponent } from './dermApp/pages/dermatologist/card-p-dermatologist/card-p-dermatologist.component';
import { ViewPatientComponent } from './dermApp/pages/patient/view-patient/view-patient.component';
import { HeaderPatientComponent } from './dermApp/pages/patient/header-patient/header-patient.component';
import { HomePatientComponent } from './dermApp/pages/patient/home-patient/home-patient.component';
import { MyFilesPatientComponent } from './dermApp/pages/patient/my-files-patient/my-files-patient.component';
import { RemindersPatientComponent } from './dermApp/pages/patient/reminders-patient/reminders-patient.component';
import { MyDoctorPatientComponent } from './dermApp/pages/patient/my-doctor-patient/my-doctor-patient.component';
import { ProfilePatientComponent } from './dermApp/pages/patient/profile-patient/profile-patient.component';
import { MessagesPatientComponent } from './dermApp/pages/patient/messages-patient/messages-patient.component';
import { EditProfilePatientComponent } from './dermApp/pages/patient/edit-profile-patient/edit-profile-patient.component';




@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ScheduleDoctorComponent,
    HomePageComponent,
    HeaderComponent,
    RegisterFormComponent,
    AboutComponent,
    LoginFormComponent,
    TypeOfUserComponent,
    ScheduleComponent,
    HeaderDermatologistComponent,
    ListPatientsComponent,
    CalendarDermatologistComponent,
    ProfileDermatologistComponent,
    ViewDermatologistComponent,
    ChatDermatologistComponent,
    AnalyticsDermatologistComponent,
    EditProfileDermatologistComponent,
    BottomSheetComponent,
    VisitorViewComponent,
    InfoPatientSpecificComponent,
    CardPDermatologistComponent,
    ViewPatientComponent,
    HeaderPatientComponent,
    HomePatientComponent,
    MyFilesPatientComponent,
    RemindersPatientComponent,
    MyDoctorPatientComponent,
    ProfilePatientComponent,
    MessagesPatientComponent,
    EditProfilePatientComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ReactiveFormsModule,
        MatExpansionModule
    ],
  providers: [PatientsService,DermatologistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
