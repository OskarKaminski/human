import {Component} from '@angular/core';

export class LoggedUserComponent {
    constructor(){
        console.log('LoggedUserComponent bootstrapped');
    }
}

LoggedUserComponent.annotations = [
    new Component({
        selector: 'logged',
        template: `
            <!--<navbar></navbar>-->
            qwe
            <router-outlet></router-outlet>`
    })
];