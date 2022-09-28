import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePatientComponent} from "./public/home-patient/home-patient.component";
import {HomeDermatologistComponent} from "./public/home-dermatologist/home-dermatologist.component";
import {Dermatologist2Component} from "./dermApp/pages/dermatologist2/dermatologist2.component";
import {DermatologistComponent} from "./dermApp/pages/dermatologist/dermatologist.component";

const routes: Routes = [
  {path: 'home', component: DermatologistComponent},
  {path: 'patients', component: Dermatologist2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
