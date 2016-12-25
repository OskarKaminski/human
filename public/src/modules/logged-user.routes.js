import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Users as UsersPage} from '../pages/users/users.page';
import {LoggedUserComponent} from './logged-user.component';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
import {ProfilePage}  from '../pages/profile/profile.page';
import {Users}  from 'Services/users';

const routes = [
    {
        path: '',
        component: LoggedUserComponent,
        children: [
            {
                path: '',
                children: [
                    {path: 'users', component: UsersPage},
                    {path: 'profile/:id', component: ProfilePage},
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

LoggedRoutingModule.parameters = [
    [Users]
];