/*
import title job enum
*/
import { TITLE_JOB } from './TITLE_JOB';
//---------------------
export class Person{
    detailInfo:string;
	constructor(){}
	}

//---------------------
export class Employee {
  private id: number;
  static count=0;
  private firstName: string;
  private lastName: string;
  private middleName: string;
  private fullName:string;
  private detailInfo:string;
  private titleJob:TITLE_JOB;
  /*
  Contructor with an 3rd parameter is optional parameter
  */
  constructor( firstName:string,  lastName:string,   titleJob:TITLE_JOB, middleName?:string) {
        this.fullName = "Full Name: "+this.buildName(firstName,lastName,titleJob,middleName);
		this.id=Employee.count++;
    this.firstName=firstName;
    this.lastName=lastName;
    this.titleJob=titleJob
		this.detailInfo = this.fullName+", Title Job = "+this.titleJob+" ,id = " + this.id;

    }
/*
Function with parameters and an optional parameter
*/
 public buildName(firstName: string, lastName: string, titleJob:TITLE_JOB, middleName?: string):string {
    if (middleName)
        return firstName + " " + middleName + " " + lastName;
    else
        return firstName +" " +lastName;
}
/*
Function to call at another class
*/
 public printLog(){
	console.log("Logging:"+this.fullName);
}
checkFullName():boolean{
	if(this.fullName.length >12) {

    return true;
  }
	return false;
}
//-------Getters, and Setters---------------
	get getFullName() : string {
        return this.fullName;
    }

    set setFullName(name : string) {
        this.fullName = name;
    }

/*

* */

	get getFirstName() : string {
        return this.firstName;
    }
    set setFirstName(name : string) {
        this.firstName = name;
    }
	get getId() : number {
        return this.id;
    }
	get getDetailInfo():string{
		return this.detailInfo;
	}
}
//------------

