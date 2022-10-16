import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import * as _ from 'lodash';
import {PatientsService} from "../../../services/patients.service";
import {MatTableDataSource} from "@angular/material/table";
import {Patient} from "../../../model/patient";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit,AfterViewInit {

  // form:FormGroup
  loading=false
  a:any=[]
  patientForm: FormGroup;
  patientData: Patient;
  dataSource: MatTableDataSource<any>;
  displayedColumns : string [] = ['id', 'name', 'age', 'address','actions'];

  @ViewChild('patientForm', {static: false})
  form! : NgForm;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;
  AddNewPatient =false;
  isEditMode = false;

  constructor(private patientsService: PatientsService, private router:Router,private _snackBar: MatSnackBar, private builder: FormBuilder) {
    this.patientData = {} as Patient;
    this.dataSource = new MatTableDataSource<any>();
    this.patientForm = this.builder.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      age: ['',Validators.required],
      address: ['',Validators.required]
    })

  }

  get name(){return this.patientForm.controls['name']}
  get age(){return this.patientForm.controls['age']}
  get address(){return this.patientForm.controls['address']}

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{
      this.loading=false;
    },1500)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getAllPatients();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllPatients() {
    this.patientsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  AddNewPatientForm(){
    this.AddNewPatient = true;
  }

  editItem(element: Patient) {
    this.patientData = _.cloneDeep(element);
    this.AddNewPatient = false;
    this.isEditMode = true;
  }
  showInfoPatient(id:number){
    console.log(id);
    this.patientsService.getById(id).subscribe((response:any)=> {
      this.a.data=response;
      this.router.navigate(['/infoPatientSpecific'],this.a)
    })
    console.log(this.a);
  }
  cancelEdit() {
    this.AddNewPatient=false;
    this.isEditMode = false;
    this.patientForm.reset();
  }

  deleteItem(id: number) {
    this.patientsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data
        .filter((o: Patient) => { return o.id !== id ? o : false; });
    });
    this._snackBar.open('patient successfully eliminated', '',{
      duration:6000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
    console.log(this.dataSource.data);
  }

  addPatient() {
    if (this.name.hasError('required') || this.age.hasError('required')
      || this.address.hasError('required')){
      console.log('there is value required');
      return ;
    }else{
      console.log('data sent');
    }

    this.patientData.id = 0;
    this.patientsService.create(this.patientData).subscribe((response: any) => {
      setTimeout(()=>{
        this.dataSource.data.push({...response});
        this.dataSource.data = this.dataSource.data.map((o: any) => { return o});
      },1500)
    });
    this._snackBar.open('patient added successfully', '',{
      duration:6000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
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
    this._snackBar.open('patient successfully updated', '',{
      duration:6000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  onSubmit() {
    if (this.patientForm.valid) {
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

