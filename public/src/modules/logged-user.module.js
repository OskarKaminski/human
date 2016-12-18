import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';

//Components
import {UserComponent}  from '../components/user/user.component';
import {Navbar}  from '../components/navbar/navbar';
import {MoodMeterComponent}  from '../components/mood-meter/mood-meter.component';

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
            UserComponent,
            PrivateDashboard,
            Navbar,
            LoggedUserComponent,
            MoodMeterComponent
        ]
    })
];
