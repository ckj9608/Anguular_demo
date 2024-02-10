import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z]+.[a-z]{2,}')]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;
      this.employeeService.addEmployee(employee);
      this.employeeForm.reset();
      this.router.navigate(['/employees']);
    } else {
      this.employeeForm.markAllAsTouched();
    }
  }
}
