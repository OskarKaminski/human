import template from './profile.page.html';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from 'Services/users';
import {HabitRequests} from 'Services/habit-requests';
import 'rxjs/add/operator/switchMap';
import _ from 'lodash';

export class ProfilePage {

    constructor(users, habitRequests, route){
        this.users = users;
        this.habitRequests = habitRequests;
        this.request = {};
        this.route = route;
    }

    ngOnInit(){
        this.route.params.switchMap(params => {
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

        this.users.currentUserObservable.subscribe(user => {
            const sender = this.users.transformToDb(user);
            const recipient = this.users.transformToDb(this.user);

            this.habitRequests.send({
                ...this.request,
                recipient,
                sender
            });
        });


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
    [HabitRequests],
    [ActivatedRoute]
];