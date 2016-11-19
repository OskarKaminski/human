import angular from 'angular';
import 'angularfire';
import firebaseInstance from './firebase';
import categories from './categories';
import habits from './habits';


angular.module('services', ['firebase'])
    .constant('firebase', firebaseInstance)
    .service('categories', categories)
    .service('habits', habits);