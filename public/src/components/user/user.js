import template from './user.html';
import './user.scss';
import {Component} from '@angular/core';

export class User {
    emoji = {
        perfect: '😁',
        well: '🙂',
        sad: '😢',
        angry: '😤'
    };
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