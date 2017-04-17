import template from './users.page.html';
import {Component} from '@angular/core';
import {store} from 'Store/store';
import {fetchUsers} from 'Store/user/actions';

@Component({
    selector: 'users',
    template: template
})
export class Users {
    constructor () {
        this.users = store.getState().users;
        store.subscribe(() => {
            this.users = store.getState().users;
        });
    }
}
