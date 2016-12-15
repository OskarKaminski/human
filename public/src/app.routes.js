import {Login}  from './pages/login/login';
import {Logout}  from './pages/logout/logout';
import {Registration}  from './pages/registration/registration';
import {RouterModule} from '@angular/router'
import {NgModule} from '@angular/core';

const routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'logout',
        component: Logout
    },
    {
        path: 'registration',
        component: Registration
    },
    {
        path: '',
        loadChildren: 'src/modules/logged-user.module#LoggedUserModule'
    }
    // { path: '**',    component: NoContentComponent },
];

export class AppRouting {
}

AppRouting.annotations = [
    new NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })
];