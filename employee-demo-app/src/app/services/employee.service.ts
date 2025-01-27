import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_BASE_URL = import.meta.env['NG_APP_API_BASE_URL']+ '/employees';

  constructor(private http: HttpClient) { 

  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_BASE_URL);
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.API_BASE_URL, employee);
  }


  getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.API_BASE_URL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.API_BASE_URL}/${id}`, employee);
  }


  deleteEmployee(id: number){
    return this.http.delete<any>(`${this.API_BASE_URL}/${id}`)
  }

}
