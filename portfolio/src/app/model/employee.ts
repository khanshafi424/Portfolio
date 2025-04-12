export class Employee {
    employeeId: number;
    fullName: string;
    email: string;
    phone: number;
    gender: string;
    dateOfJoining: string;
    departmentId: string;
    designationId: string;
    employeeType: string;
    salary: number;

    constructor( ) {
        this.employeeId = 0;
        this.fullName = '';
        this.email = '';
        this.phone = 0;
        this.gender = '';
        this.dateOfJoining = '';
        this.departmentId = '';
        this.designationId ='';
        this.employeeType = '';
        this.salary = 0;
    
    }
}

export interface IEmployeeList {
    employeeId: number;
    fullName: string;
    email: string;
    phone: number;
    gender: string;
    dateOfJoining: string;
    departmentName: string;
    designationName: string;
    employeeType: string;
    salary: number;
}


export interface IDepartment {
        departmentId: number;
        departmentName: string;
}

export interface IDesignation {
    designationId: number;
    designationName: string;
}

