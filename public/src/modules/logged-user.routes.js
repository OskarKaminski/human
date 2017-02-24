import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {Users as UsersPage} from '../pages/users/users.page';
import {LoggedUserComponent} from './logged-user.component';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
import {ProfilePage}  from '../pages/profile/profile.page';
import {SettingsPage}  from '../pages/settings/settings.page';
import {AngularFire} from 'angularfire2'
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
                    {path: 'settings', component: SettingsPage},
                    {path: '', component: DashboardPage}
                ]
            }
        ]
    }
];

export class LoggedRoutingModule {
    constructor (af, router) {
        af.auth.subscribe(authUser => {
            if(!authUser){
                router.navigateByUrl('/login');
            }
        });
    }
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
    [AngularFire],
    [Router]
];
