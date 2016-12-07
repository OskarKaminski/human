import {Component} from '@angular/core';

export class AppComponent {
    name = 'Angular 2';
}

AppComponent.annotations = [
    new Component({
        selector: 'app',
        template: `<h1>Hello {{name}}</h1>`
    })
];