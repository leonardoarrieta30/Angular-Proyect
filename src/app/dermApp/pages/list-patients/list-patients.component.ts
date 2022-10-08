import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {PatientsService} from "../../services/patients.service";
import {MatTableDataSource} from "@angular/material/table";
import {Patient} from "../../model/patient";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit,AfterViewInit {

  // form:FormGroup
  loading=false
  loading2=false

  patientData: Patient;
  dataSource: MatTableDataSource<any>;
  displayedColumns : string [] = ['id', 'name', 'age', 'address','actions'];


  @ViewChild('patientForm', {static: false})
  patientForm!: NgForm;

  @ViewChild(MatPaginator, {static: false})
  paginator!: MatPaginator;


  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private patientsService: PatientsService) {
    this.patientData = {} as Patient;
    this.dataSource = new MatTableDataSource<any>();
    // this.form = this.fb.group({
    //   name:['',Validators.required],
    //   age:['',Validators.required],
    //   address:['',Validators.required],
    // })
  }
  // getInto(){
  //   const name = this.form.value.name;
  //   const age = this.form.value.age;
  //   const address = this.form.value.address;
  //   console.log(name);
  //   console.log(age);
  //   console.log(address);
  //   this.fakeLoading();
  //     // redirecionar a tablero o dashboard o al componente
  // }
  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      //lo redirrecionamos ya con las rutas
      this.loading=false;
    },1500)
  }



  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllPatients();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getAllPatients() {
    this.patientsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }


  editItem(element: Patient) {
    this.patientData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.patientForm.resetForm();
  }

  deleteItem(id: number) {
    this.patientsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data
        .filter((o: Patient) => { return o.id !== id ? o : false; });
    });
    console.log(this.dataSource.data);
  }
  //GAAAAAAAAA SALIO CSMR
  addPatient() {
    this.patientData.id = 0;
    this.patientsService.create(this.patientData).subscribe((response: any) => {
      setTimeout(()=>{
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((o: any) => { return o});
      },1500)
    });
  }

  updatePatient() {
    this.patientsService.update(this.patientData.id, this.patientData)
      .subscribe((response: any) => {
        this.dataSource.data = this.dataSource.data
          .map((o: Patient) => {
            if (o.id === response.id) {
              o = response;
            }
            return o;
          });
      });
  }

  onSubmit() {
    if (this.patientForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log(' about to update');
        this.updatePatient();
      } else {
        console.log('about to add');
        this.addPatient();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }

  }


}

