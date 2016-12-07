import template from './user.html';
import './user.scss';
import {Component} from '@angular/core';

export class User {
    constructor(){
    }
}

User.annotations = [
    new Component({
        selector: 'user',
        template: template,
        inputs: [
            'data'
        ],
    })
];