import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';

//Components
import {User}  from '../components/user/user';
import {Navbar}  from '../components/navbar/navbar';

//Pages
import {Users}  from '../pages/users/users2';
import {PrivateDashboard}  from '../pages/user-private-dashboard/private-dashboard2';
import {LoggedUserComponent} from './logged-user.component';

//Routing
import {LoggedRoutingModule} from './logged-user.routes';


export class LoggedUserModule {
    constructor() {
        console.log('LoggedUserModule inited');
    }
}

LoggedUserModule.annotations = [
    new NgModule({
        imports: [
            CommonModule,
            LoggedRoutingModule
        ],
        declarations: [
            Users,
            User,
            PrivateDashboard,
            Navbar,
            LoggedUserComponent
        ]
    })
];
