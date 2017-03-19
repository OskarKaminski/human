import template from './users.page.html';
import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import _ from 'lodash/lodash.min';

export class Users {
    constructor(af) {
        this.users = af.database.list('/users');
    }

    inProgress(user){
        return user.habits && _.keys(user.habits.incomplete).length || 0;
    }

    mastered(user){
        return user.habits && _.keys(user.habits.complete).length || 0;
    }
}

Users.annotations = [
    new Component({
        selector: 'users',
        template: template
    })
];

Users.parameters = [
    [AngularFire]
];
