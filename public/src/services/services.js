import angular from 'angular';
import 'angularfire';
import firebaseInstance from './firebase';
import categories from './categories';
import habits from './habits';
import users from './users';
import habitRequests from './habit-requests';


angular.module('services', ['firebase'])
    .constant('firebase', firebaseInstance)
    .service('categories', categories)
    .service('habits', habits)
    .service('habitRequests', habitRequests)
    .service('users', users);