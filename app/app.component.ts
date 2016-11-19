import {Component, OnInit} from '@angular/core';

//Import classes
import { Employee, Person as newPerson} from './employee';
import { EmployeeService } from './employee.service';
import { TITLE_JOB } from './TITLE_JOB';
// Declare array
let Employees: Employee[] = [];
@Component({
  moduleId: module.id,
  selector: 'my-app-add-new',
  templateUrl: 'html/addnew.html',
  styleUrls:['styles/styles.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit{
  title = 'Management Employee';

  myEmployees = Employees;
  aNewEmployee = new Employee("Nguyen","Hương",TITLE_JOB.LEAD);
  selectedHero: Employee;
  onSelect(employee: Employee): void {
    this.selectedHero = employee;
  }
  constructor(public employeeService: EmployeeService) {
  //  this.heroService=heroService;
  }
  //Add new employee function
 addNew(event):void{

 //Using the jquery
	var firstName=$("#firstName").val();
	var middleName=$("#middleName").val();
	var lastName=$("#lastName").val();
	//----------------------
	var newEmployee;

	if(middleName.length==0)
	newEmployee = new Employee(firstName, lastName, TITLE_JOB.LEAD); // call contructor 2 parameters
else
	newEmployee = new Employee(firstName, lastName, TITLE_JOB.LEAD,middleName); //call contructor 3 parameters
	//----------using module------------
	//-------------using namespace----------------
	let com = new  Spiralg.vnext.pipe.typeSCript.Common();
	let com1 = new  SpiralG.pipe.vnext.typeSCript.Common();
	//using generic function in namespace
	newEmployee=com.printObject<Employee>(newEmployee);
	com1.printObject(newEmployee);
	//Call function to show log
	newEmployee.printLog();
    if(newEmployee.checkFullName()) {
      //   Employees.push(newEmployee);
      Employees=this.employeeService.addnewEmploy(Employees,newEmployee);
    }
else
	alert('Some field is null');
	//---------------
	let person = new newPerson ();
	// Type Compatibility(Person and Employee had the same: detailInfo )
	person = newEmployee;
	//console.log("Finished Creating "+person.detailInfo);
	//-----------------------
	$("#firstName").val('');
	$("#middleName").val('');
	$("#lastName").val('');
	//------------------------
}
/*
Search
*/
  addGoodEmployee(event):void{
	var Id=(<HTMLInputElement>document.getElementById("ID")).value;
		for (var employee of Employees)
			if(employee.getId.toString() == Id) {
        this.employeeService.getgoodEmployee().push(employee);
      }
}
  ngOnInit() {

  }
  ngDoCheck() {
    // Custom change detection

  }
  ngOnChanges(changes) {


  }
  ngAfterContentInit() {
    // Component content has been initialized


  }
  ngAfterContentChecked() {

  }
  ngAfterViewInit() {

  }
  ngAfterViewChecked() {

  }
}

//bootstrap(AppComponent);