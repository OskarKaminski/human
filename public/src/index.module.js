import angular from 'angular';
import 'ngstorage';
import 'jquery';
import 'bootstrap';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import {appPage} from './pages/app/app.page';
import {users} from './pages/users/users.page';
import {manageUsers} from './pages/manage-users/manage-users';
import {userPublicDashboard} from './pages/profile/profile.page';
import {userPrivateDashboard} from './pages/user-private-dashboard/user-private-dashboard';
import {manageHabits} from './pages/manage-habits/manage-habits';
import {Login} from './pages/login/login';
import {RegistrationPage} from './pages/registration/registration';

// Modules
import './components/components.module';

// Services
import './services/services';

// Filters
import './filters/filters.module';

angular.module('app', ['ui.router',
    'ngStorage',
    'components',
    'services',
    'filters'])
    .component('users', users)
    .component('appPage', appPage)
    .component('manageUsers', manageUsers)
    .component('manageHabits', manageHabits)
    .component('loginPage', Login)
    .component('registrationPage', RegistrationPage)
    .component('userPublicDashboard', userPublicDashboard)
    .component('userPrivateDashboard', userPrivateDashboard)
    .config(routerConfig)
    .run(runConfig);

function runConfig(session) {
    session.userId = '-KX1d7S7DSz536aV-9Du';
}

runConfig.$inject = ['$sessionStorage'];

function routerConfig($stateProvider,
                      $urlRouterProvider) {
    $stateProvider
        .state('App', {
            abstract: true,
            template: '<app-page></app-page>'
        })
        .state('Login', {
            url: '/login',
            template: '<login-page></login-page>'
        })
        .state('App.Users', {
            url: '/users',
            template: '<users></users>'
        })
        .state('App.ManageUsers', {
            url: '/manage-users',
            template: '<manage-users></manage-users>'
        })
        .state('App.UserPublicDashboard', {
            url: '/user-dashboard/:id',
            template: '<user-public-dashboard></user-public-dashboard>'
        })
        .state('App.UserPrivateDashboard', {
            url: '/private-dashboard',
            template: '<user-private-dashboard></user-private-dashboard>'
        })
        .state('App.ManageHabits', {
            url: '/manage-habits',
            template: '<manage-habits></manage-habits>'
        })
        .state('App.Registration', {
            url: '/registration',
            template: '<registration-page></registration-page>'
        });

    $urlRouterProvider.otherwise('/login');
}
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
