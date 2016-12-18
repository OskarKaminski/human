import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';

//Components
import {UserComponent}  from '../components/user/user.component';
import {NavbarComponent}  from '../components/navbar/navbar.component';
import {MoodMeterComponent}  from '../components/mood-meter/mood-meter.component';

//Pages
import {Users}  from '../pages/users/users2';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
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
            DashboardPage,
            NavbarComponent,
            LoggedUserComponent,
            MoodMeterComponent
        ]
    })
];
