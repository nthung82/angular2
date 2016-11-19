import { Employee } from './employee';
import { TITLE_JOB } from './TITLE_JOB';
export let MyEmployee: Employee[] = [];
export let MygoodEmployees: Employee[] = [];
export class ShowEmployee {
  aEmployee: Employee;
  constructor(aEmployee: Employee) {
    this.aEmployee = aEmployee;
  }
}