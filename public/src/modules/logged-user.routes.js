import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Users}  from '../pages/users/users2';
import {LoggedUserComponent} from './logged-user.component';
import {PrivateDashboard}  from '../pages/user-private-dashboard/private-dashboard2';

const routes = [
    {
        path: '',
        component: LoggedUserComponent,
        children: [
            {
                path: '',
                children: [
                    {path: 'users', component: Users},
                    {path: 'private-dashboard', component: PrivateDashboard},
                    {path: '', component: PrivateDashboard}
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