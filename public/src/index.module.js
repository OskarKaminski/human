import angular from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import {appPage} from './pages/app/app.page';
import {users} from './pages/users/users.page';
import {manageUsers} from './pages/manage-users/manage-users';
import {userPublicDashboard} from './pages/user-public-dashboard/user-public-dashboard';
import {manageHabits} from './pages/manage-habits/manage-habits';
import {LoginPage} from './pages/login/login';

// Modules
import './components/components.module';

// Services
import './services/services';

angular.module('app', ['ui.router',
    'components',
    'services'])
    .component('users', users)
    .component('appPage', appPage)
    .component('manageUsers', manageUsers)
    .component('manageHabits', manageHabits)
    .component('loginPage', LoginPage)
    .component('userPublicDashboard', userPublicDashboard)
    .config(routerConfig);


function routerConfig($stateProvider,
                      $urlRouterProvider) {
    $stateProvider
        .state('App', {
            url: '/',
            template: '<app-page></app-page>'
        })
        .state('App.Users', {
            url: 'users',
            template: '<users></users>'
        })
        .state('App.ManageUsers', {
            url: 'manage-users',
            template: '<manage-users></manage-users>'
        })
        .state('App.UserPublicDashboard', {
            url: 'user-dashboard/:id',
            template: '<user-public-dashboard></user-public-dashboard>'
        })
        .state('App.ManageHabits', {
            url: 'manage-habits',
            template: '<manage-habits></manage-habits>'
        })
        .state('App.Login', {
            url: 'login',
            template: '<login-page></login-page>'
        });

    $urlRouterProvider.otherwise('/');
}
routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
