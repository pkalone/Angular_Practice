import { Component } from '@angular/core';
import { EmployeeList } from '../../../models/employee.model';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports:[CommonModule,HttpClientModule],
  styleUrl: './employee-list.component.css',
  providers:[EmployeeServiceService]
})
export class EmployeeListComponent {

employeeList!:EmployeeList[]

constructor(private employeService:EmployeeServiceService,private router:Router){}


ngOnInit()
{
this.getEmployeeList();

}

getEmployeeList()
{
  this.employeService.getEmployeeList()
    .subscribe({
      next:(data)=>{
        this.employeeList = data
      },
      error:(err:any)=>{
        console.log("Errror:"+ err)
      }
    })
  
}

ViewEmployee(id:number){
  this.router.navigate(['/empleoyee-detail'], {state:{Id:id}})
}

AddEmployee()
{
  this.router.navigate(['/add-empleoyee'])
}
}

