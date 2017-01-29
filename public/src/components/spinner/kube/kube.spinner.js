import template from './kube.spinner.html';
import {Component} from '@angular/core';
import './kube.spinner.scss';

export class KubeSpinner {}

KubeSpinner.annotations = [
    new Component({
        selector: 'kube-spinner',
        template: template
    })
];