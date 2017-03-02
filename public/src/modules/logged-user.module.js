import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {firebaseConfig} from 'Services/firebase';
import { FormsModule }   from '@angular/forms';

//Components
import {UserComponent}  from '../components/user/user.component';
import {NavbarComponent}  from '../components/navbar/navbar.component';
import {MoodMeterComponent}  from '../components/mood-meter/mood-meter.component';
import {MarshallComponent}  from '../components/marshall/marshall.component';
import {SendChallengeComponent}  from '../components/send-challenge/send-challenge.component';
import {DashboardNumberComponent} from '../components/dashboard-number/dashboard-number.component';
import {NotifyComponent} from '../components/notify/notify.component';
import {SpinnerComponent} from '../components/spinner/spinner.component';
import {KubeSpinner} from '../components/spinner/kube/kube.spinner';
import {SplashComponent} from '../components/splash/splash.component';
import {HotOrNotComponent} from '../components/hot-or-not/hot-or-not.component';
import {NavbarItems} from '../components/navbar/navbar-items/navbar-items';

//Pages
import {Users}  from '../pages/users/users.page';
import {DashboardPage}  from '../pages/dashboard/dashboard.page';
import {LoggedUserComponent} from './logged-user.component';
import {ProfilePage} from '../pages/profile/profile.page';
import {UmpirePage} from '../pages/umpire/umpire.page';
import {SettingsPage} from '../pages/settings/settings.page';
import {FeedbackPage} from '../pages/feedback/feedback.page';
import {HabitsPage} from '../pages/habits/habits.page';

// Pipes
import {KeysPipe} from '../pipes/keys'

//Routing
import {LoggedRoutingModule} from './logged-user.routes';

//Providers
import {Feedback} from 'Services/feedback';
import {Umpire} from 'Services/umpire';
import {Support} from 'Services/support';
import {Habits} from 'Services/habits';
import {Awards} from 'Services/awards';
import {Splash} from 'Services/splash';


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
            KeysPipe,
            UserComponent,
            NavbarComponent,
            LoggedUserComponent,
            MoodMeterComponent,
            MarshallComponent,
            SendChallengeComponent,
            DashboardNumberComponent,
            NotifyComponent,
            SpinnerComponent,
            SplashComponent,
            HotOrNotComponent,
            NavbarItems,
            KubeSpinner,
            DashboardPage,
            SettingsPage,
            UmpirePage,
            HabitsPage,
            FeedbackPage,
            ProfilePage
        ],
        providers: [
            Feedback,
            Umpire,
            Support,
            Habits,
            Awards,
            Splash
        ]
    })
];
