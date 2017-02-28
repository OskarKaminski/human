import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {Users as UsersPage} from '../pages/users/users.page';
import {LoggedUserComponent} from './logged-user.component';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
import {ProfilePage}  from '../pages/profile/profile.page';
import {SettingsPage}  from '../pages/settings/settings.page';
import {UmpirePage}  from '../pages/umpire/umpire.page';
import {FeedbackPage}  from '../pages/feedback/feedback.page';
import {HabitsPage}  from '../pages/habits/habits.page';
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
                    {path: 'umpire', component: UmpirePage},
                    {path: 'feedback', component: FeedbackPage},
                    {path: 'habits', component: HabitsPage},
                    {path: 'settings', component: SettingsPage},
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'dashboard'
                    }
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
