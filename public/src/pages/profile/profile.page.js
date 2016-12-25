import template from './profile.page.html';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from 'Services/users';
import {Feedback} from 'Services/feedback';
import 'rxjs/add/operator/switchMap';

export class ProfilePage {

    constructor(users, feedback, route){
        this.users = users;
        this.feedback = feedback;
        this.request = {};
        this.route = route;
    }

    ngOnInit(){
        this.profileObservable = this.route.params.switchMap(params => {
            return this.users.find(params.id);
        }).subscribe(user => {
            this.user = user;
        });
    }

    setType(type) {
        this.request.type = type;
    }

    sendChallenge = (description) => {

        this.request.description = description;

        this.users.currentUser.subscribe(user => {
            const sender = this.users.transformToDb(user);
            const recipient = this.users.transformToDb(this.user);

            this.feedback.send({
                ...this.request,
                recipient,
                sender
            });
        });
    }

    ngOnDestroy() {
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