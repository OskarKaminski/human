import {Component} from '@angular/core';

export class LoggedUserComponent {
}

LoggedUserComponent.annotations = [
    new Component({
        selector: 'logged',
        template: `
            <navbar></navbar>
            <router-outlet></router-outlet>`
    })
];