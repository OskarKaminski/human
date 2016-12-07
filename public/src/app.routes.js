import {Routes} from '@angular/router';
import {Users}  from './pages/users/users2';
import {PrivateDashboard}  from './pages/user-private-dashboard/private-dashboard2';
import {LoginPage}  from './pages/login/login';

export const ROUTES = [
    {
        path: '',
        component: PrivateDashboard
    },
    {
        path: 'private-dashboard',
        component: PrivateDashboard
    },
    {
        path: 'users',
        component: Users
    },
    {
        path: 'login',
        component: LoginPage
    }
    // { path: '**',    component: NoContentComponent },
];