import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import { HomeDermatologistComponent } from './public/home-dermatologist/home-dermatologist.component';
import { HomePatientComponent } from './public/home-patient/home-patient.component';
import { LoginComponent } from './public/login/login.component';
import { DermatologistComponent } from './dermApp/pages/dermatologist/dermatologist.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { HeaderComponent } from './shared/header/header.component';
import {MatNativeDateModule} from "@angular/material/core";
import {NgImageSliderModule} from "ng-image-slider";
import { Dermatologist2Component} from "./dermApp/pages/dermatologist2/dermatologist2.component";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    HomeDermatologistComponent,
    HomePatientComponent,
    LoginComponent,
    DermatologistComponent,
    HeaderComponent,
    Dermatologist2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgImageSliderModule,
    MatOptionModule,
    MatListModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{ }
