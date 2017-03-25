import {Component} from '@angular/core';
import '../pages/app/app.scss';
import {Users} from 'Services/users'

export class LoggedUserComponent {
    constructor (users) {
        this._users = users;
    }

    ngOnInit () {
        this.currentUserObservable = this._users.currentUserO
            .subscribe(user => {
                this.currentUser = user;
            });
    }

    ngOnDestroy () {
        this.currentUserObservable.unsubscribe();
    }
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

LoggedUserComponent.parameters = [
    [Users]
];
