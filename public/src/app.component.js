import {Component} from '@angular/core';

export class AppComponent {
}

AppComponent.annotations = [
    new Component({
        selector: 'app',
        template: `
            <router-outlet></router-outlet>`
    })
];