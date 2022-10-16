import { Component, OnInit } from '@angular/core';
import {BottomSheetComponent} from "../../dermatologist/bottom-sheet/bottom-sheet.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-edit-profile-patient',
  templateUrl: './edit-profile-patient.component.html',
  styleUrls: ['./edit-profile-patient.component.css']
})
export class EditProfilePatientComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
