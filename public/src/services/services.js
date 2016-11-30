import angular from 'angular';
import firebase from './firebase';
import 'angularfire';
import categories from './categories';
import habits from './habits';
import users from './users';
import habitRequests from './habit-requests';

// console.log(firebase);

angular.module('services', ['firebase'])
    .constant('firebase', firebase)
    .service('categories', categories)
    .service('habits', habits)
    .service('habitRequests', habitRequests)
    .service('users', users);