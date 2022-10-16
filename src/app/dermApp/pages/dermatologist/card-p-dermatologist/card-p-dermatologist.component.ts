import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Patient} from "../../../model/patient";
import {ListPatientsComponent} from "../list-patients/list-patients.component";
import {NgForm} from "@angular/forms";
import {PatientsService} from "../../../services/patients.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-card-p-dermatologist',
  templateUrl: './card-p-dermatologist.component.html',
  styleUrls: ['./card-p-dermatologist.component.css']
})
export class CardPDermatologistComponent implements OnInit {

  isEditMode = false;
  loading=false
  loading2=false
  a:any=[]
  patientData: Patient;
  dataSource: MatTableDataSource<any>;
  displayedColumns : string [] = ['id', 'name', 'age', 'address','actions'];

  @ViewChild('patientForm', {static: false})
  patientForm!: NgForm;

  constructor( private patientsService: PatientsService, private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ListPatientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient,
  ) {

    this.patientData = {} as Patient;
    this.dataSource = new MatTableDataSource<any>();
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(()=>{

      this.loading=false;
    },1500)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

  cancelEdit() {
    this.isEditMode = false;
    this.patientForm.resetForm();
  }

  getAllPatients() {
    this.patientsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }


  addPatient() {
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
