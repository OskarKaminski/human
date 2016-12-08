import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';
import {RouterModule, PreloadAllModules} from '@angular/router';

//Components
import {User}  from '../components/user/user';
import {Navbar}  from '../components/navbar/navbar';

//Pages
import {Users}  from '../pages/users/users2';
import {PrivateDashboard}  from '../pages/user-private-dashboard/private-dashboard2';

//Routing
import {ROUTES} from './logged-user.routes';


export class LoggedUserModule {
    constructor() {
        console.log('LoggedUserModule inited');
    }
}

LoggedUserModule.annotations = [
    new NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            Users,
            User,
            PrivateDashboard,
            Navbar
        ]
    })
];
