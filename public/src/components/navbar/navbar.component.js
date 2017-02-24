import {Component} from '@angular/core';
import template from './navbar.component.html';
import './navbar.component.scss';

export class NavbarComponent {
    constructor (){
        this.expanded = false;
    }
    toggle(){
        this.expanded = !this.expanded;
    }
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
