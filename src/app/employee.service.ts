import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL ="http://localhost:8080/api/v1/employees";

  constructor(private httClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{

    return  this.httClient.get<Employee[]>(`${this.baseURL}`);
  }

  saveNewEmployee(employee:Employee): Observable<Object>{

    return this.httClient.post(`${this.baseURL}`,employee);

  }

  findEmployeeById(id:number):Observable<Employee>{

    return this.httClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number,  employee:Employee): Observable<Object>{

    return this.httClient.put(`${this.baseURL}/${id}`,employee);

  }

  deleteEmployee(id:number): Observable<Object>{


    console.log(`${this.baseURL}/${id}`);
    return this.httClient.delete(`${this.baseURL}/${id}`);

  }

}

