import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService:EmployeeService, private router:Router){  }

 
  returnToEmployeeList(){

    this.router.navigate(['/employees'])
  } 

  ngOnInit():void{}

  saveNewEmployee(){

    this.employeeService.saveNewEmployee(this.employee).subscribe(data =>{

      console.log(data);
      this.returnToEmployeeList();
    },error =>console.log(error));
    
  }

  onSubmit(){
   
    console.log(this.employee);
    this.saveNewEmployee();
  }

}
