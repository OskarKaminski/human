import template from './profile.page.html';
import './profile.page.scss';
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import {Splash} from 'Services/splash';
import 'rxjs/add/operator/switchMap';

export class ProfilePage {

    constructor (users, feedback, route, splash, router) {
        this.users = users;
        this.feedback = feedback;
        this.request = {};
        this.route = route;
        this.splashO = splash.splashO;
        this.router = router;
        this.marshallActive = false;
    }

    ngOnInit () {
        this.profileObservable = this.route.params.switchMap(params => {
            return this.users.find(params.id);
        }).subscribe(user => {
            this.user = user;
        });
    }

    setType (type) {
        this.request.type = type;
        this.marshallActive = false;
    }

    sendFeedback = (description) => {
        this.request.description = description;

        this.feedback.send(this.request, this.user)
            .subscribe(() => {
                this.router.navigateByUrl('/');
                this.splashO.next({text: 'Feedback has been sent'});
            });
    }

    ngOnDestroy () {
        this.profileObservable.unsubscribe();
    }
}

ProfilePage.annotations = [
    new Component({
        selector: 'profile',
        template
    })
];

ProfilePage.parameters = [
    [Users],
    [Feedback],
    [ActivatedRoute],
    [Splash],
    [Router]
];
