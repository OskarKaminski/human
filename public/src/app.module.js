import { NgModule }      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import {firebaseConfig} from 'Services/firebase';

//Modules
import {LoggedUserModule} from './modules/logged-user.module';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//Pages
import { AppComponent }  from './app.component';
import { LoginPage }  from './pages/login/login';
import { Logout }  from './pages/logout/logout';

//Routing
import {ROUTES} from './app.routes';

const AF = AngularFireModule.initializeApp(firebaseConfig);

const Router = RouterModule.forRoot(ROUTES);

export class AppModule { }
AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            FormsModule,
            LoggedUserModule,
            AF,
            Router
        ],
        declarations: [
            AppComponent,
            LoginPage,
            Logout
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/'}
        ],
        bootstrap:    [ AppComponent ]
    })
];