import { NgModule }      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import {firebaseConfig} from 'Services/firebase';

//Modules
import {LoggedUserModule} from './modules/logged-user.module';
import {AppRouting} from './app.routes';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

//Pages
import { AppComponent }  from './app.component';
import { Login }  from './pages/login/login';
import { Logout }  from './pages/logout/logout';


const AF = AngularFireModule.initializeApp(firebaseConfig);

export class AppModule { }
AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            FormsModule,
            LoggedUserModule,
            AF,
            AppRouting
        ],
        declarations: [
            AppComponent,
            Login,
            Logout
        ],
        providers: [
            {provide: APP_BASE_HREF, useValue: '/'}
        ],
        bootstrap:    [ AppComponent ]
    })
];