import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviorment } from '../../enviorment/enviorment.development';
import { AddEmployee, EmployeeList } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http :HttpClient) { }

  url :string = enviorment.PORT_URL 

  getEmployeeList():Observable<EmployeeList[]>
  {
   return this.http.get<EmployeeList[]>(this.url+"profilemaster/GetProfiles")
  }

  addEmployee(payload:AddEmployee):Observable<any>
  {
   return this.http.post(this.url+"profilemaster/AddProfile",payload)
  }
    getEmployeeById(id:number):Observable<EmployeeList>
  {
   return this.http.get<EmployeeList>(this.url+`profilemaster/GetProfileById?Id=${id}`)
  }
}
