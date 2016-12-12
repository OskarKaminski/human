import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire} from 'angularfire2';

export class Logout {
    constructor(af, router) {
        this.auth = af.auth;
        this.router = router;
    }

    ngOnInit() {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    }

}

Logout.annotations = [
    new Component({
        template: ''
    })
];

Logout.parameters = [
    [AngularFire],
    [Router]
];