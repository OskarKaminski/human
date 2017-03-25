import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {firebaseConfig} from 'Services/firebase';
import 'bootstrap/dist/js/bootstrap.min';

//Modules
import {LoggedUserModule} from './modules/logged-user.module';
import {AppRouting} from './app.routes';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'twemoji-awesome/dist/twemoji-awesome.min.css';
import './pages/app/button.scss';
import './pages/app/table.scss';
import './pages/app/app.scss';
import './pages/app/bootstrap-overwrite.scss';

//Pages
import { AppComponent }  from './app.component';
import { Login }  from './pages/login/login';
import { Logout }  from './pages/logout/logout';

//Providers
import {Users} from 'Services/users';


const AF = AngularFireModule.initializeApp(firebaseConfig);

export class AppModule { }
AppModule.annotations = [
    new NgModule({
        imports:      [
            BrowserModule,
            FormsModule,
            HttpModule,
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
            Users
        ],
        bootstrap:    [ AppComponent ]
    })
];
