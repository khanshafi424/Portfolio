import { Routes } from '@angular/router';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employee-form/employee-form.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: EmployeeListComponent, title: 'Emp list' },
    { path: 'new-employee', component: EmployeeFormComponent },
    {path: 'edit-employee/:id', component: EmployeeFormComponent},
    { path: '**', component: PageNotFoundComponent }
];
