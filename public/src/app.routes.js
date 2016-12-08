import {PrivateDashboard}  from './pages/user-private-dashboard/private-dashboard2';
import {LoginPage}  from './pages/login/login';
import {Users}  from './pages/users/users2';

export const ROUTES = [
    {
        path: 'login',
        component: LoginPage
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
        path: '',
        component: PrivateDashboard
    }
    // { path: '**',    component: NoContentComponent },
];