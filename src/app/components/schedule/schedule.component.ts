import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @ts-ignore
  private _selected: Date | null;
  get selected(): Date | null {
    return this._selected;
  }

  set selected(value: Date | null) {
    this._selected = value;
  }

}

