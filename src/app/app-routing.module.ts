import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'register-employee', component: RegisterEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employees/:id', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
