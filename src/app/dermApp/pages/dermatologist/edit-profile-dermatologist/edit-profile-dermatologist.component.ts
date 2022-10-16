import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import { MatSidenavModule } from '@angular/material/sidenav';
import {BottomSheetComponent} from "../bottom-sheet/bottom-sheet.component";

@Component({
  selector: 'app-edit-profile-dermatologist',
  templateUrl: './edit-profile-dermatologist.component.html',
  styleUrls: ['./edit-profile-dermatologist.component.css']
})
export class EditProfileDermatologistComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}

