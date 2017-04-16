import template from './profile.page.html';
import './profile.page.scss';
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import _ from 'lodash/lodash.min';
import {ActivatedRoute, Router} from '@angular/router';
import {store} from '../../store/store';
import 'rxjs/add/operator/switchMap';

export class ProfilePage {

    constructor (route, router, http) {
        this.request = {};
        this.route = route;
        this.router = router;
        this.http = http;
        this.marshallActive = false;
    }

    ngOnInit () {
        this.profileObservable = this.route.params.switchMap(params => {
            return this.http.get(`http://localhost:5000/api/user/${params.id}`)
        }).subscribe(response => {
            this.user = JSON.parse(response._body)[0];
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
    [ActivatedRoute],
    [Router],
    [Http]
];
