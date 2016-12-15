import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';

//Components
import {User}  from '../components/user/user';
import {Navbar}  from '../components/navbar/navbar';
import {MoodMeter}  from '../components/mood-meter/mood-meter';

//Pages
import {Users}  from '../pages/users/users2';
import {PrivateDashboard}  from '../pages/user-private-dashboard/private-dashboard2';
import {LoggedUserComponent} from './logged-user.component';

//Routing
import {LoggedRoutingModule} from './logged-user.routes';


export class LoggedUserModule {
    constructor() {
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
            LoggedUserComponent,
            MoodMeter
        ]
    })
];
