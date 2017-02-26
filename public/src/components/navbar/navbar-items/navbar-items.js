import {Component} from '@angular/core';
import template from './navbar-items.html';
import './navbar-items.scss';

export class NavbarItems {
}

NavbarItems.annotations = [
    new Component({
        selector: 'navbar-items',
        template: template
    })
];
