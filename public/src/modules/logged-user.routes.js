import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Users}  from '../pages/users/users2';
import {LoggedUserComponent} from './logged-user.component';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';

const routes = [
    {
        path: '',
        component: LoggedUserComponent,
        children: [
            {
                path: '',
                children: [
                    {path: 'users', component: Users},
                    {path: 'dashboard', component: DashboardPage},
                    {path: '', component: DashboardPage}
                ]
            }
        ]
    }
];

export class LoggedRoutingModule {
}

LoggedRoutingModule.annotations = [
    new NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [
            RouterModule
        ]
    })
];