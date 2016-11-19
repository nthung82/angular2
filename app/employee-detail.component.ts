import { Component, Input } from '@angular/core';
import { Employee } from './employee';

@Component({
selector: 'my-employee-detail',
templateUrl: 'app/html/detail.html',
})
export class EmployeeDetailComponent {
  //To define an input for a component
  @Input()
  employee: Employee;

}


