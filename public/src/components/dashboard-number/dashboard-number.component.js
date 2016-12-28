import template from './dashboard-number.component.html';
import {Component} from '@angular/core';
import './dashboard-number.component.scss';

export class DashboardNumberComponent {
}

DashboardNumberComponent.annotations = [
    new Component({
        selector: 'dashboard-number',
        template,
        inputs: [
            'title',
            'icon',
            'number',
            'color'
        ]
    })
];