import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  constructor(private employeeService: EmployeeService){

  }

  employeeForm = new FormGroup({
    empName: new FormControl('', [Validators.required]),
    empEmail: new FormControl('', [Validators.required, Validators.email]),
    empSalary: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get empName(): FormControl {
    return this.employeeForm.get('empName') as FormControl;
  }

  get empEmail(): FormControl {
    return this.employeeForm.get('empEmail') as FormControl;
  }

  get empSalary(): FormControl {
    return this.employeeForm.get('empSalary') as FormControl;
  }


  successMessage: string = '';
  errorMessage: string = '';

  handleSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    const {empName, empEmail, empSalary} = this.employeeForm.value;

    if (empName && empEmail && empSalary) {
      
      // assigning the form result to employee
      const newEmployee: Employee = {empName, empEmail, empSalary: Number(empSalary)};
      this.employeeService.addEmployee(newEmployee).subscribe({
        next: (data) => {
          this.employeeForm.reset();
          this.successMessage = "Employee Added Successfuly"
        },
        error: (error) => {
          console.log(error);
          this.errorMessage = "Something went wrong, please try again"
        }
      });


    } else {
      this.errorMessage = 'Something went wrong, Please try again';
    }


  }
}
