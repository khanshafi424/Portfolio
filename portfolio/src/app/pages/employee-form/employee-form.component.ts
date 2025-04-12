import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee, IDepartment, IDesignation } from '../../model/employee';
import { EmployeeService } from '../../employee.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe, NgIf],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  public employeeObj: Employee = new Employee();
  deptList$: Observable<IDepartment[]> = new Observable<IDepartment[]>();
  designationList: IDesignation[] = []
  editEmpId: number = 0;

  constructor(private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute
  ) {
    this.deptList$ = this.employeeService.getAllDepartment();
    this.activateRoute.params.subscribe((res: any) => {
      this.editEmpId = res.id;
      if (this.editEmpId != 0) {
        this.getEditEmployee();
      }
    })
  }


  onSaveEmplyee() {
    this.employeeService.createNewEmployee(this.employeeObj).subscribe((res) => {
      alert("Emplyee Created");
    }, error => {
      alert("Api Error" + error.error)
    })
  }

  onResetEmplyee() {
    this.employeeObj = {} as Employee;
  }


  getDesignationByDeptId() {
    this.employeeService.getDesignationByDeptId(this.employeeObj.departmentId).subscribe((res: IDesignation[]) => {
      this.designationList = res
    })
  }

  getEditEmployee() {
    this.employeeService.getEditEmployeeById(this.editEmpId).subscribe((res: any) => {
      this.employeeObj = res;
      this.employeeObj.dateOfJoining = this.formatDateToYMD(this.employeeObj.dateOfJoining)
      this.getDesignationByDeptId();
    })
  }

  formatDateToYMD(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
  }

  onUpdateEmplyee() {
    this.employeeService.updateEmployee(this.employeeObj).subscribe((res) => {
      alert("Employee Updated")
    }, error => {
      alert("Api Error" + error.error)
    })
  }
}
