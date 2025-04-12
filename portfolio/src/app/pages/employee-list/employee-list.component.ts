import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { IEmployeeList } from '../../model/employee';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  empService = inject(EmployeeService)
  router = inject(Router);
  employeeList: IEmployeeList[] = [];

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.getAllEmployee().subscribe((res: IEmployeeList[]) => {
      this.employeeList = res;
    })
  }

  deleteEmployee(employeeId: number) {
    const isDelete = confirm("Are you want to Delete")
    if (isDelete) {
      this.empService.deleteEmployee(employeeId).subscribe((res) => {
        alert("Employee Deleted Successfully")
        this.getEmployee();
      })
    }
  }

  EditEployee(id: number) {
    this.router.navigateByUrl("edit-employee/" + id)
  }

}
