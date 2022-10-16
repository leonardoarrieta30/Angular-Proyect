import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Patient} from "../../../model/patient";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PatientsService} from "../../../services/patients.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-chat-dermatologist',
  templateUrl: './chat-dermatologist.component.html',
  styleUrls: ['./chat-dermatologist.component.css']
})
export class ChatDermatologistComponent implements OnInit {

  ngOnInit(): void {
  }

}
