import template from './profile.page.html';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import 'rxjs/add/operator/switchMap';

export class ProfilePage {

    constructor (users, feedback, route) {
        this.users = users;
        this.feedback = feedback;
        this.request = {};
        this.route = route;
        this.marshallActive = true;
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

    sendChallenge = (description) => {

        this.request.description = description;

        this.feedbackObservable = this.users.currentUser.filter(user => user)
            .map(user => ({
                ...this.request,
                recipient: this.users.transformToDb(this.user),
                sender: this.users.transformToDb(user)
            }))
            .take(1)
            .subscribe(feedback => {
                this.feedback.send(feedback);
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
    [ActivatedRoute]
];
