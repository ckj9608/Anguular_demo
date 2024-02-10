import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './employee.service';
import { ReactiveFormsModule } from '@angular/forms'; 

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
