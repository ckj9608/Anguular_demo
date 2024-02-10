import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  private employeeSubject = new BehaviorSubject<Employee[]>([]);
  constructor() { }
  getEmployees() {
    return this.employeeSubject.asObservable();
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeeSubject.next(this.employees);
  }

}
