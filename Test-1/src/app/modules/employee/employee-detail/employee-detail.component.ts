import { Component } from '@angular/core';
import { EmployeeList } from '../../../models/employee.model';
import { EmployeeServiceService } from '../../../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
  providers:[EmployeeServiceService,]
})
export class EmployeeDetailComponent {


  employeeDetail!:EmployeeList
  id!:number
  constructor(private employeService:EmployeeServiceService){}
  
  
  ngOnInit()
  {
    this.id = history.state.Id
  this.getEmployeeById(this.id);
  
  }
  
  getEmployeeById(id:number):void
  {
    this.employeService.getEmployeeById(id)
      .subscribe({
        next:(data)=>{
          this.employeeDetail = data
        },
        error:(err:any)=>{
          console.log("Errror:"+ err)
        }
      })
    
  }
}
