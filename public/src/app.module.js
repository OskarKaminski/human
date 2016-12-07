import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

export class AppModule { }

AppModule.annotations = [
    new NgModule({
        bootstrap:    [ AppComponent ],
        imports:      [ BrowserModule ],
        declarations: [ AppComponent ]
    })
];