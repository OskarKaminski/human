import template from './profile.page.html';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Users} from 'Services/users';

export class ProfilePage {

    constructor(users, route){
        this.users = users;
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



    // this.setType = (type) => {
    //     this.request.type = type;
    // };
    //
    // this.sendChallenge = (description) => {
    //
    //     this.request.description = description;
    //
    //     const currentUser = _.pick(
    //         users.currentUser,
    //         ['uid', 'photoURL', 'displayName', 'email']
    //     );
    //
    //     habitRequests.send({
    //         ...this.request,
    //         recipient: this.user,
    //         sender: currentUser
    //     });
    // }
}

ProfilePage.annotations = [
    new Component({
        selector: 'profile',
        template
    })
];

ProfilePage.parameters = [
    [Users],
    [ActivatedRoute]
];