import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';

import { ScheduleDoctorComponent } from './dermApp/pages/schedule-doctor/schedule-doctor.component';

import { HomePageComponent } from './public/pages/home-page/home-page.component';
import { HeaderComponent } from './public/pages/header/header.component';

import { RegisterFormComponent } from './public/auth/register-form/register-form.component';

import { AboutComponent } from './public/pages/about/about.component';
import { LoginFormComponent } from './public/auth/login-form/login-form.component';
import { HttpClientModule } from "@angular/common/http";
import {PatientsService} from "./dermApp/services/patients.service";
import { TypeOfUserComponent } from './public/auth/type-of-user/type-of-user.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HeaderDermatologistComponent } from './dermApp/pages/header-dermatologist/header-dermatologist.component';
import { ListPatientsComponent } from './dermApp/pages/list-patients/list-patients.component';

import { CalendarDermatologistComponent } from './dermApp/pages/calendar-dermatologist/calendar-dermatologist.component';
import { ProfileDermatologistComponent } from './dermApp/pages/profile-dermatologist/profile-dermatologist.component';
import { ViewDermatologistComponent } from './dermApp/pages/view-dermatologist/view-dermatologist.component';
import { ChatDermatologistComponent } from './dermApp/pages/chat-dermatologist/chat-dermatologist.component';
import { AnalyticsDermatologistComponent } from './dermApp/pages/analytics-dermatologist/analytics-dermatologist.component';
import {SharedModule} from "./dermApp/pages/shared/shared.module";
import {DermatologistsService} from "./dermApp/services/dermatologists.service";
import { EditProfileDermatologistComponent } from './dermApp/pages/edit-profile-dermatologist/edit-profile-dermatologist.component';
import { BottomSheetComponent } from './dermApp/pages/bottom-sheet/bottom-sheet.component';



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
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [PatientsService,DermatologistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
