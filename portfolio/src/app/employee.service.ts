import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IDepartment, IDesignation, IEmployeeList } from './model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = "https://api.freeprojectapi.com/api/EmployeeApp/";

  constructor(private http: HttpClient) {

   }

   getAllEmployee(): Observable<IEmployeeList[]> {
    return this.http.get<IEmployeeList[]>(this.apiUrl + "GetEmployees")
   }

   deleteEmployee(id:number): Observable<number> {
    return this.http.delete<number>(`${this.apiUrl}DeleteEmployee${id}`)
   }
   
   createNewEmployee(obj: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.apiUrl + "CreateEmployee", obj)
   }

   updateEmployee(obj: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + "UpdateEmployee", obj)
   }

   getAllDepartment(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.apiUrl}GetDepartments`)
   }

   getDesignationByDeptId(deptId: string): Observable<IDesignation[]> {    
    return this.http.get<IDesignation[]>(`${this.apiUrl}GetDesignationsByDeptId?deptId=${deptId}`)
   }

   getEditEmployeeById(deptId: number): Observable<Employee> {    
    return this.http.get<Employee>(`${this.apiUrl}${deptId}`)
   }
}
