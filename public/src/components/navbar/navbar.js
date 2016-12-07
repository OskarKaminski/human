import {Component} from '@angular/core';
import template from './navbar.html';
import './navbar.scss';

export class Navbar {
}

Navbar.annotations = [
    new Component({
        selector: 'navbar',
        template: template
    })
];