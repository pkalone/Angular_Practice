import { Routes } from '@angular/router';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './modules/employee/employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';

export const routes: Routes = [
    {path:'', component:EmployeeListComponent},
    {path:'add-empleoyee', component:AddEmployeeComponent},
    {path:'empleoyee-detail', component:EmployeeDetailComponent}
];
