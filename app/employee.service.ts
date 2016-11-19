import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { MyEmployee,MygoodEmployees } from './mock-employees';

@Injectable()
export class EmployeeService {
  getEmployees(): Employee[] {
    return MyEmployee;
  }
  getgoodEmployee(): Employee[] {
    return MygoodEmployees;
  }
  /*
  showListGoodEmloyee(){
    for(var employ  of MygoodEmployees)
      console.log("List good Employee:"+employ.getDetailInfo);
  }*/
  addnewEmploy(list:Employee[],aEmp):Employee[]{
    list.push(aEmp);
    return list;
  }
  //--------------
  /*addgoodEmploy(list:Employee[],aEmp):Employee[]{
    list.push(aEmp);
    return list;
  }
  */
}