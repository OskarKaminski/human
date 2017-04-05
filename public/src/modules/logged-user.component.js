import {Component} from '@angular/core';
import '../pages/app/app.scss';

export class LoggedUserComponent {
}

LoggedUserComponent.annotations = [
    new Component({
        selector: 'logged',
        template: `
            <notify></notify>
            <spinner></spinner>
            <splash></splash>
            <div id="page-wrapper">
                <navbar [user]="currentUser"></navbar>
                <div class="router-outlet">
                    <router-outlet></router-outlet>
                 </div>
            </div>`
    })
];
