import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2'
import template from './login2.html';
import './login.scss';


// function LoginCtrl(firebase, fbAuth, users, state) {
//
//     const ref = firebase.auth();
//     this.authData = {};
//
//     this.login = ({email, password}) => {
//         ref.signInWithEmailAndPassword(email, password)
//             .then(user => {
//                 if(user){
//                     state.go('App.UserPrivateDashboard');
//                 }
//                 console.log(user);
//             });
//     };
//
//     this.loginWithFb = () => {
//         firebase.auth().signInWithPopup(fbAuth).then(function(result) {
//             users.getOrCreate(result.user);
//             state.go('App.UserPrivateDashboard');
//
//         }).catch(function(error) {
//             console.log(error);
//         });
//     }
// }

export class LoginPage {
    constructor(af){
        this.af = af;
        this.af.auth.subscribe(auth => console.log(auth));
    }

    login({email, password}){
        this.af.auth.login({email, password});
    }
}

LoginPage.annotations = [
    new Component({
        template
    })
];

LoginPage.parameters = [
    [AngularFire]
];