import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import 'bootstrap/dist/css/bootstrap.css';

import { AppComponent }  from './app.component';
import { Users }  from './pages/users/users2';
import { PrivateDashboard }  from './pages/user-private-dashboard/private-dashboard2';
import { User }  from './components/user/user';
import { Navbar }  from './components/navbar/navbar';
import { LoginPage }  from './pages/login/login';
import { RouterModule, PreloadAllModules }   from '@angular/router';
import {firebaseConfig} from 'Services/firebase';

import {ROUTES} from './app.routes';


export class AppModule { }

AppModule.annotations = [
    new NgModule({
        bootstrap:    [ AppComponent ],
        imports:      [
            BrowserModule,
            AngularFireModule.initializeApp(firebaseConfig),
            RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
        ],
        declarations: [
            AppComponent,
            Users,
            PrivateDashboard,
            User,
            Navbar,
            LoginPage
        ]
    })
];
