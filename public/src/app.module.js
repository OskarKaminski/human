import { NgModule }      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { RouterModule }   from '@angular/router';
import {firebaseConfig} from 'Services/firebase';

//Modules
import {LoggedUserModule} from './modules/logged-user.module';

//CSS
import 'bootstrap/dist/css/bootstrap.css';

//Pages
import { AppComponent }  from './app.component';
import { LoginPage }  from './pages/login/login';

//Routing
import {ROUTES} from './app.routes';

const AF = AngularFireModule.initializeApp(firebaseConfig);

export class AppModule { }

AppModule.annotations = [
    new NgModule({
        bootstrap:    [ AppComponent ],
        imports:      [
            BrowserModule,
            LoggedUserModule,
            AF,
            RouterModule.forRoot(ROUTES)
        ],
        declarations: [
            AppComponent,
            LoginPage
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/'}
        ]
    })
];
