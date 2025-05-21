import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  providers:[EmployeeServiceService]
})
export class AddEmployeeComponent {


  employeeForm!:FormGroup

  constructor(private fb:FormBuilder, private employeeServ:EmployeeServiceService){

  }

  ngOnInit(){
this.createForm();
  }

  createForm():void
{
  this.employeeForm = this.fb.group({
    firstName :[null,[Validators.required,Validators.minLength(3),Validators.maxLength(300)]],
    lastName :[null,[Validators.required,Validators.minLength(3),Validators.maxLength(300)]],
    technology :[null,[Validators.required,Validators.minLength(3),Validators.maxLength(3000)]],
    noofYearsExperience :[null,[Validators.required,Validators.min(0),Validators.max(50)]]
  })
}


submitForm():void{
  if(this.employeeForm.invalid)
  {
    this.employeeForm.markAllAsTouched();
    return;
  }
  

  this.employeeServ.addEmployee(this.employeeForm.value).subscribe({
      next:(data)=>{
        alert("success")
        console.log(data);
      },
      error:(err:any)=>{
        console.log("Errror:"+ err)
      }
    })
}
}
