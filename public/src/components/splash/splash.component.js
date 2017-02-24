import {Component} from '@angular/core';
import template from './splash.component.html';
import './splash.component.scss';
import {Splash} from 'Services/splash';

export class SplashComponent {
    constructor (splash) {
        this.visible = false;
        splash.splashO.subscribe(this.show.bind(this));
    }

    close () {
        this.visible = false;
    }

    show ({text}) {
        this.visible = true;
        this.text = text;
    }
}

SplashComponent.annotations = [
    new Component({
        selector: 'splash',
        template,
        inputs: [
            'visible',
            'text',
            'type'
        ]
    })
];

SplashComponent.parameters = [
    [Splash]
]
