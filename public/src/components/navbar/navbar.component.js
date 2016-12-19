import {Component} from '@angular/core';
import template from './navbar.component.html';
import './navbar.component.scss';

export class NavbarComponent {
}

NavbarComponent.annotations = [
    new Component({
        selector: 'navbar',
        template: template,
        inputs: [
            'user'
        ]
    })
];