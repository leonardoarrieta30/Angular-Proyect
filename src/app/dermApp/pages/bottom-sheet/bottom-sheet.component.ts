import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef:MatBottomSheetRef<BottomSheetComponent>) { }

  ngOnInit(): void {
  }
  dismiss(){
    this.bottomSheetRef.dismiss();
  }

}
