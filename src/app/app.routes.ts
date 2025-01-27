import { Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

export const routes: Routes = [
    {path: "", redirectTo: "employees", pathMatch:"full"},
    {path: "employees", component: EmployeesListComponent},
    {path: "employees/add", component: AddEmployeeComponent},
    {path: "employees/:id", component: EditEmployeeComponent},

];
