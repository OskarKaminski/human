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
import {FeedbackComponent} from '../components/feedback/feedback.component';
import {HabitsComponent} from '../components/habits/habits.component';
import {SupportComponent} from '../components/support/support.component';
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
import {SettingsPage} from '../pages/settings/settings.page';

//Routing
import {LoggedRoutingModule} from './logged-user.routes';

//Providers
import {Feedback} from 'Services/feedback';
import {ThankYou} from 'Services/thank-you';
import {Support} from 'Services/support';
import {Habits} from 'Services/habits';
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
            UserComponent,
            DashboardPage,
            SettingsPage,
            NavbarComponent,
            LoggedUserComponent,
            MoodMeterComponent,
            MarshallComponent,
            SendChallengeComponent,
            DashboardNumberComponent,
            FeedbackComponent,
            HabitsComponent,
            SupportComponent,
            NotifyComponent,
            SpinnerComponent,
            SplashComponent,
            HotOrNotComponent,
            NavbarItems,
            KubeSpinner,
            ProfilePage
        ],
        providers: [
            Feedback,
            ThankYou,
            Support,
            Habits,
            Splash
        ]
    })
];
