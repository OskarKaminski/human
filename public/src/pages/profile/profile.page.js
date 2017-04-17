// template, styles
import template from './profile.page.html';
import './profile.page.scss';
// Injectors, decorators
import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
// store
import {store} from 'Store/store';
import {showMarshall} from './actions';
import {sendFeedback} from 'Store/feedback/actions';
// Libs

@Component({
    selector: 'profile',
    template
})
export class ProfilePage {
    static parameters = [[ActivatedRoute], [Router], [Http]];
    constructor (route, router, http) {
        this.request = {};
        this.route = route;
        this.router = router;
        this.http = http;
        this.userId;
        store.subscribe(()=> {
            console.log(store.getState().overlays === 'marshall');
            console.log(this);
            this.marshallActive = store.getState().overlays === 'marshall';
        })
    }

    ngOnInit () {
        this.profileObservable = this.route.params.switchMap(params => {
            this.userId = params.id;
            return this.http.get(`http://localhost:5000/api/user/${params.id}`)
        }).subscribe(response => {
            this.user = JSON.parse(response._body)[0];
        });
    }

    showMarshall () {
        store.dispatch(showMarshall());
    }

    setType (type) {
        this.request.type = type;
        this.marshallActive = false;
    }

    sendFeedback = (description) => {
        this.request.description = description;

        const {currentUser} = store.getState();
        store.dispatch(sendFeedback(this.request, currentUser.id, this.userId))
        // this.feedback.send(this.request, this.user)
        //     .subscribe(() => {
        //         this.router.navigateByUrl('/');
        //         this.splashO.next({text: 'Feedback has been sent'});
        //     });
    }

    ngOnDestroy () {
        this.profileObservable.unsubscribe();
    }
}
