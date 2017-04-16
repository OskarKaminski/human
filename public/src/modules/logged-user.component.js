import {Component} from '@angular/core';
import '../pages/app/app.scss';
import {store} from '../store/store';
import {fetchUsers} from '../store/user/actions';

export class LoggedUserComponent {
    ngOnInit(){
        store.dispatch(fetchUsers(1));
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
