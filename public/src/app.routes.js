import {Login}  from './pages/login/login';
import {Logout}  from './pages/logout/logout';
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