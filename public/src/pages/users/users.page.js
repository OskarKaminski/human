import template from './users.page.html';
import {Component} from '@angular/core';
import {store} from 'Store/store';
import {fetchUsers} from 'Store/user/actions';

export class Users {
    constructor () {
        this.users = store.getState().users;
        store.subscribe(() => {
            this.users = store.getState().users;
        });
    }
}

Users.annotations = [
    new Component({
        selector: 'users',
        template: template
    })
];
