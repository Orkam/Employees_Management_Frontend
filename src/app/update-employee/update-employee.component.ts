import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   
    this.employee = new Employee();

    this.employeeService.findEmployeeById(this.id).subscribe(data =>{

      this.employee = data;

    });
    
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(dato => {
      
    },error => console.log(error));
  }
}
