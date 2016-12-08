import {LoginPage}  from './pages/login/login';

export const ROUTES = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: '',
        loadChildren: 'src/modules/logged-user.module#LoggedUserModule'
    }
    // { path: '**',    component: NoContentComponent },
];