import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  imports: [RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((data) => {
      console.log(data);

      // setting the data to the employee array
      this.employees = data;
    })
  }

  handleDelete(id: number) {
    const result = confirm('Are you sure you want to delete the employee?');

    if (result) {      
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          // updates the employees
          this.loadAllEmployees();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }


}
