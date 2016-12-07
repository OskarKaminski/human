import template from './users2.html';
import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFire } from 'angularfire2';

export class Users {
    constructor(af){
        this.users = af.database.list('/users');
    }
}

Users.annotations = [
    new Component({
        selector: 'users',
        template: template,
        directives: [CommonModule]
    })
];

Users.parameters = [
    [AngularFire]
];