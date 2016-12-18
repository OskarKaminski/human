import template from './user.component.html';
import './user.scss';
import {Component} from '@angular/core';

export class UserComponent {
    emoji = {
        perfect: '😁',
        well: '🙂',
        sad: '😢',
        angry: '😤'
    };
}

UserComponent.annotations = [
    new Component({
        selector: 'user',
        template: template,
        inputs: [
            'data'
        ],
    })
];