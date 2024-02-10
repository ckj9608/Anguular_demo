import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  hasData: boolean = false;
  employees: Employee[] = [];

  constructor(private route: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.fetchData();
  }
  fetchData(){
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
      this.hasData = this.employees.length > 0;
    });
  }
  addEmployee(){
    this.route.navigate(['/add-employee']);
  }
  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
    this.hasData = this.employees.length > 0;
  }
}
