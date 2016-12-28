import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';
import { FormsModule }   from '@angular/forms';

//Components
import {UserComponent}  from '../components/user/user.component';
import {NavbarComponent}  from '../components/navbar/navbar.component';
import {MoodMeterComponent}  from '../components/mood-meter/mood-meter.component';
import {MarshallCircleComponent}  from '../components/marshall-circle/marshall-circle.component';
import {SendChallengeComponent}  from '../components/send-challenge/send-challenge.component';
import {DashboardNumberComponent} from '../components/dashboard-number/dashboard-number.component';
import {FeedbackComponent} from '../components/feedback/feedback.component';
import {HabitsComponent} from '../components/habits/habits.component';
import {SupportComponent} from '../components/support/support.component';

//Pages
import {Users}  from '../pages/users/users.page';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
import {LoggedUserComponent} from './logged-user.component';
import {ProfilePage} from '../pages/profile/profile.page';
import {SettingsPage} from '../pages/settings/settings.page';

//Routing
import {LoggedRoutingModule} from './logged-user.routes';

//Providers
import {Feedback} from 'Services/feedback';


export class LoggedUserModule {
    constructor() {
    }
}

LoggedUserModule.annotations = [
    new NgModule({
        imports: [
            CommonModule,
            FormsModule,
            LoggedRoutingModule
        ],
        declarations: [
            Users,
            UserComponent,
            DashboardPage,
            SettingsPage,
            NavbarComponent,
            LoggedUserComponent,
            MoodMeterComponent,
            MarshallCircleComponent,
            SendChallengeComponent,
            DashboardNumberComponent,
            FeedbackComponent,
            HabitsComponent,
            SupportComponent,
            ProfilePage
        ],
        providers: [
            Feedback
        ]
    })
];
