import {LoginPage}  from './pages/login/login';
import {Logout}  from './pages/logout/logout';
// import {RouterModule, ROUTER_CONFIGURATION} from '@angular/router'

export const ROUTES = [
    {
        path: 'login',
        component: LoginPage
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

// export class AppRouting {
// }
//
// AppRouting.annotations = [
//     new NgModule({
//         imports: [
//             RouterModule.forRoot(ROUTES)
//         ],
//         exports: [
//             RouterModule
//         ]
//     })
// ];